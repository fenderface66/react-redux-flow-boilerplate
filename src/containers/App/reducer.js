import { type Action, type State, actionKeys } from './types';

const initialState = {
  appInitiated: false,
}

export default function counter(state: State = initialState, action: Action) {
  switch (action.type) {
  case actionKeys.INITIATE_APP:
    return {
      ...state,
      appInitiated: true,
    };
  default:
    return state;
  }
}
