
import { IReminder } from "@/types/reminders";
import { Actions, IReminderActions, dispatchType } from "../types";

const useReminder = (dispatch: dispatchType): IReminderActions => {
  const { SET_REMINDER, EDIT_REMINDER, REMOVE_REMINDER, SET_SELECTED_REMINDER } = Actions

  const handleSetReminder = (reminder: IReminder) => {
    dispatch({
      type: SET_REMINDER,
      payload: reminder
    })
  }

  const handleEditReminder = (reminder: IReminder) => {
    dispatch({
      type: EDIT_REMINDER,
      payload: reminder
    })
  }

  const handleRemoveReminder = (id: string) => {
    dispatch({
      type: REMOVE_REMINDER,
      payload: id
    })
  }

  const handleSetSelectedReminder = (selectedReminderId?: string) => {
    dispatch({
      type: SET_SELECTED_REMINDER,
      payload: selectedReminderId
    })
  }

  return ({
    handleSetReminder,
    handleEditReminder,
    handleRemoveReminder,
    handleSetSelectedReminder
  })
}

export default useReminder