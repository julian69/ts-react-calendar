import { getMonthByDate, getWeeks, getYearByDate } from "@/lib/dates";
import { Actions, IAction, IDateReducer } from "../types";

export const dateReducerInitialState: IDateReducer = {
  date: new Date(),
  weeks: getWeeks(new Date()),
  month: getMonthByDate(new Date()),
  year: getYearByDate(new Date()),
  selectedDate: undefined,
}

export const dateReducer = (state: IDateReducer, action: IAction): IDateReducer => {
  switch (action.type) {
    case Actions.UPDATE_DATE: {
      return {
        ...state,
        date: action.payload,
        weeks: getWeeks(action.payload),
        month: getMonthByDate(action.payload),
        year: getYearByDate(action.payload),
      }
    }
    case Actions.SET_SELECTED_DATE: {
      return {
        ...state,
        selectedDate: action.payload.id ? {
          id: action.payload.id,
          date: action.payload.selectedDate
        } : undefined
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

