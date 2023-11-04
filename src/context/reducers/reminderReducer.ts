import { Actions, IAction, IReminderReducer } from "../types";

export const reminderReducerInitialState: IReminderReducer = {
  selectedReminderId: undefined,
  reminders: []
}

export const reminderReducer = (state: IReminderReducer, action: IAction): IReminderReducer => {
  switch (action.type) {
    case Actions.SET_REMINDER: {
      return {
        ...state,
        reminders: [
          ...state.reminders,
          action.payload
        ]
      }
    }
    case Actions.EDIT_REMINDER: {
      const remainingReminders = state.reminders.filter(r => r.id !== action.payload.id)

      return {
        ...state,
        reminders: [
          ...remainingReminders,
          action.payload
        ]
      }
    }
    case Actions.REMOVE_REMINDER: {
      const result = state.reminders.filter(r => r.id !== action.payload)

      return {
        ...state,
        reminders: result
      }
    }
    case Actions.SET_SELECTED_REMINDER: {
      return {
        ...state,
        selectedReminderId: action.payload
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

