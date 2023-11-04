import { Actions, IAction, IUIReducer } from "../types";

export const uiReducerInitialState: IUIReducer = {
  isModalOpen: false,
}

export const uiReducer = (state: IUIReducer, action: IAction): IUIReducer => {
  switch (action.type) {
    case Actions.TOGGLE_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

