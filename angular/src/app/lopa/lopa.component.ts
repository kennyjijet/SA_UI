import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from '../../store/test';
import { ActionTypes } from '../../store/test/actions';
@Component({
  selector: 'app-lopa',
  templateUrl: './lopa.component.html',
  styleUrls: ['./lopa.component.scss']
})
export class LOPAComponent implements OnInit {
  testLocal = '';
  constructor() { 
    store.subscribe((state) => {
      this.testLocal = state.test;
    });
  }

  ngOnInit(): void {
    eventDispatcher.next({type: ActionTypes.CREATE_TEST});
  }

}
