import {Subject} from 'rxjs';
import {ActionTypes} from './actions';

interface InitialStateTest {
  test: string;
}

interface Event {
  type: String;
  payload?: Object;
}

let stateTest: InitialStateTest = {
  test: 'TEST',
};


export const store = new Subject<InitialStateTest>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.CREATE_TEST:
      store.next(stateTest);
      break;

    case ActionTypes.UPDATE_TEST:
      stateTest = {
        test: data.payload as string
      };
      store.next(stateTest);
      break;

    case ActionTypes.GET_TEST:
      store.next(stateTest);
      break;
    case ActionTypes.CREATE_TEST:
      stateTest = {
        test: data.payload as string
      };
      store.next(stateTest);
      break;
    default:
      break;
  }
});
