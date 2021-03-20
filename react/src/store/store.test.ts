import { DrawerStore } from 'store/drawerStore';
import { CursorMode, DrawingMode, ShapeStrokeWidth } from 'service/drawers/baseDrawer';
import { highlightPresetRedRGBA, transparent, highlightYellowRGBA } from 'components/common/colorSettings/colors';

let store: DrawerStore;

describe('Drawer Store', () => {
    beforeEach(() => {
        store = new DrawerStore();
    });

    it('observables should be initialized with proper default values', () => {
        expect(store.cursorMode).toBe(CursorMode.Select);
        expect(store.drawingMode).toBe(DrawingMode.NotSpecified);
        expect(store.shouldPerformCrop).toBe(false);
        expect(store.shouldSaveCanvasImage).toBe(false);
        expect(store.shouldDeleteObject).toBe(false);
        expect(store.hasActiveObject).toBe(false);
        expect(store.isUndoStackAvailable).toBe(false);
        expect(store.isRedoStackAvailable).toBe(false);
        expect(store.isRevertAvailable).toBe(true);
        expect(store.isStateControlsAllowed).toBe(true);
        expect(store.currentZoom).toBe(null);
    });

    it('drawer options should be initialized with proper default values', () => {
        expect(store.drawerOptions.fill).toBe(transparent);
        expect(store.drawerOptions.stroke).toBe(highlightPresetRedRGBA);
        expect(store.drawerOptions.strokeWidth).toBe(2);
        expect(store.drawerOptions.selectable).toBe(true);
        expect(store.drawerOptions.strokeUniform).toBe(true);
    });

    it('highlight options should be initialized with proper default values', () => {
        expect(store.highlightOptions.strokeWidth).toBe(2);
        expect(store.highlightOptions.fill).toBe(highlightYellowRGBA);
        expect(store.highlightOptions.stroke).toBe(highlightYellowRGBA);
    });

    it('text options should be initialized with proper default values', () => {
        expect(store.textOptions.fill).toBe(highlightPresetRedRGBA);
        expect(store.textOptions.stroke).toBe(highlightPresetRedRGBA);
        expect(store.textOptions.fontSize).toBe(20);
        expect(store.textOptions.fontFamily).toBe('Arial');
        expect(store.textOptions.textAlign).toBe('left');
        expect(store.textOptions.fontWeight).toBe('normal');
        expect(store.textOptions.fontStyle).toBe('normal');
        expect(store.textOptions.underline).toBe(false);
        expect(store.textOptions.selectable).toBe(true);
        expect(store.textOptions.strokeUniform).toBe(true);
    });

    it('setCursorMode() should update cursorMode', () => {
        expect(store.cursorMode).toBe(CursorMode.Select);
        store.setCursorMode(CursorMode.Draw);
        expect(store.cursorMode).toBe(CursorMode.Draw);
    });

    it('setDrawingMode() should update drawingMode', () => {
        expect(store.drawingMode).toBe(DrawingMode.NotSpecified);
        store.setDrawingMode(DrawingMode.Rectangle);
        expect(store.drawingMode).toBe(DrawingMode.Rectangle);
    });

    it('setShouldPerformCrop() should update shouldPerformCrop', () => {
        expect(store.shouldPerformCrop).toBe(false);
        store.setShouldPerformCrop(true);
        expect(store.shouldPerformCrop).toBe(true);
    });

    it('setShouldSaveCanvasImage() should update shouldSaveCanvasImage', () => {
        expect(store.shouldSaveCanvasImage).toBe(false);
        store.setShouldSaveCanvasImage(true);
        expect(store.shouldSaveCanvasImage).toBe(true);
    });

    it('setShouldDeleteObject() should update shouldDeleteObject', () => {
        expect(store.shouldDeleteObject).toBe(false);
        store.setShouldDeleteObject(true);
        expect(store.shouldDeleteObject).toBe(true);
    });

    it('setHasActiveObject() should update hasActiveObject', () => {
        expect(store.hasActiveObject).toBe(false);
        store.setHasActiveObject(true);
        expect(store.hasActiveObject).toBe(true);
    });

    it('setIsUndoStackAvailable() should update isUndoStackAvailable', () => {
        expect(store.isUndoStackAvailable).toBe(false);
        store.setIsUndoStackAvailable(true);
        expect(store.isUndoStackAvailable).toBe(true);
    });

    it('setIsRedoStackAvailable() should update isRedoStackAvailable', () => {
        expect(store.isRedoStackAvailable).toBe(false);
        store.setIsRedoStackAvailable(true);
        expect(store.isRedoStackAvailable).toBe(true);
    });

    it('setIsRevertAvailable() should update isRedoStackAvailable', () => {
        expect(store.isRevertAvailable).toBe(true);
        store.setIsRevertAvailable(false);
        expect(store.isRevertAvailable).toBe(false);
    });

    it('setIsStateControlsAllowed() should update isRedoStackAvailable', () => {
        expect(store.isStateControlsAllowed).toBe(true);
        store.setIsStateControlsAllowed(false);
        expect(store.isStateControlsAllowed).toBe(false);
    });

    it('setCurrentZoom() should update currentZoom', () => {
        expect(store.currentZoom).toBe(null);
        store.setCurrentZoom(5);
        expect(store.currentZoom).toBe(5);
    });

    it('setDrawingOptions() should update drawerOptions', () => {
        const expected = { stroke: 'red', strokeWidth: ShapeStrokeWidth.Thin };
        store.setDrawingOptions(expected);
        expect(store.drawerOptions).toStrictEqual(expected);
    });

    it('setHighlightOptions() should update drawerOptions', () => {
        const expected = { stroke: 'red', strokeWidth: ShapeStrokeWidth.Thin };
        store.setHighlightOptions(expected);
        expect(store.highlightOptions).toStrictEqual(expected);
    });

    it('setTextOptions() should update textOptions', () => {
        const expected = { fill: 'red', underline: true };
        store.setTextOptions(expected);
        expect(store.textOptions).toStrictEqual(expected);
    });
});
