import { CounterAction, INCREMENT, IncrementAction } from './counter.action';
import { Action } from '@ngrx/store';

const InitialState = 0;

export function CounterReducer(
  state = InitialState,
  action: CounterAction | Action,
) {
  if (action.type === INCREMENT) {
    return state + (action as IncrementAction).value;
  }
  return state;
}
