import { NavigationActions } from "@/types/actions";
import { nextMonth, previousMonth } from "@/lib/dates";
import { Actions, ActionsType, IDateActions, ISelectedDateParams, dispatchType } from "../types";

const useDate = (dispatch: dispatchType): IDateActions => {
  const { NEXT, PREV, TODAY } = NavigationActions
  const { SET_SELECTED_DATE, UPDATE_DATE } = Actions

  const handleDateChange = (date: Date, type: NavigationActions) => {
    const values: ActionsType = {
      [NEXT]: nextMonth(date),
      [PREV]: previousMonth(date),
      [TODAY]: new Date()
    }

    dispatch({
      type: UPDATE_DATE,
      payload: values[type as keyof ActionsType]
    })
  }

  const handleSetSelectedDate = (params?: ISelectedDateParams) => {
    dispatch({
      type: SET_SELECTED_DATE,
      payload: {
        id: params?.id,
        selectedDate: params?.selectedDate
      }
    })
  }

  return ({
    handleDateChange,
    handleSetSelectedDate
  })
}

export default useDate