import { Component, OnInit } from '@angular/core';
import { eventDispatcher } from '../../store';
import { ActionTypes } from '../../store/actions';

@Component({
  selector: 'app-fancy-title',
  templateUrl: './fancy-title.component.html',
  styleUrls: ['./fancy-title.component.scss']
})
export class FancyTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    eventDispatcher.next({type: ActionTypes.GET_NOTES});
  }
}
