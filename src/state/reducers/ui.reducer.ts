import { createReducer, on } from '@ngrx/store';
import { startLoading, stopLoading } from '../actions';
import { UIState } from '../core';

export const initialUIState: UIState = {
  isLoading: true,
};

const uiReducer = createReducer(
  initialUIState,
  on(startLoading, (state: UIState) => ({ ...state, isLoading: true })),
  on(stopLoading, (state: UIState) => ({ ...state, isLoading: false }))
);

export function uiStore(state: any, action: any) {
  return uiReducer(state, action);
}
