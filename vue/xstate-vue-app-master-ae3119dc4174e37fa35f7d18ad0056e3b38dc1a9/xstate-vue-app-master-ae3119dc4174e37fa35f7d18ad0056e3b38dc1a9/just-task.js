"use strict";
const { task, option, logger, argv } = require('just-task');
const Mustache = require('mustache');
option('index');
///////////////////////////////////////////////////////////////////////////////////////////////
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const mkdirp = require('mkdirp')

async function getFiles(dir) {
  const dirents = await fsPromises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

function addIndex(filename, index) {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  return `${base}${index}${ext}`;
}
///////////////////////////////////////////////////////////////////////////////////////////////
task('new', 'New Example on [index]', async () => {
    const folderName = 'template-new';
    const index = argv().index;
    logger.info(`index=${index}`);

    const searchDir = path.join(__dirname, folderName);
    const files = await getFiles(searchDir);
    logger.info(`files=${JSON.stringify(files)}`);

    const items = files.map((file) => {
      const newBase = addIndex(file, index);
      const relativeDir = path.relative(searchDir, path.dirname(file));
      const destDir = path.join(__dirname, relativeDir);
      const item = {
        source: file,
        dest: path.format({
          dir: destDir,
          base: newBase,
        }),
      };
      return item;
    });

    Mustache.tags = ["[[", "]]"]; // {{ and }} are used in vue
    const context = {
      index: index,
    };

    const promises = items.map(async (item) => {
      const destDir = path.dirname(item.dest);
      await mkdirp(destDir);
      const hasOld = await fs.promises.access(item.dest, fs.constants.F_OK).then(() => true).catch(() => false);
      if (hasOld) {
        return Promise.reject(`Already exist file=${item.dest}`);
      }

      const buffer = await fsPromises.readFile(item.source);
      const templateText = buffer.toString();
      const outText = Mustache.render(templateText, context);
      
      logger.info(` > write file=${item.dest}`);
      await fsPromises.writeFile(item.dest, outText)
    });

    await Promise.all(promises);

    // todo: add new item in
    // - vite.config.ts
    // - src/components/All.vue
    return;
});
