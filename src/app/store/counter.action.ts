import { Action } from '@ngrx/store';

// export const Increment = createAction(
//   '[Counter] Increment',
//   props<{ value: number }>(),
// );

export const INCREMENT = '[Counter] IncrementAction';

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

export type CounterAction = IncrementAction;
