import { NavigationActions } from "@/types/actions"
import { IWeeks } from "@/types/dates"
import { IReminder } from "@/types/reminders";
import { Dispatch, ReactNode } from "react"

export interface IAction {
  type: Actions;
  payload?: any;
}

interface ISelectedDate {
  id: string,
  date: Date
}

export type dispatchType = Dispatch<IAction>

export interface IDateReducer {
  date: Date,
  weeks: IWeeks[],
  month: string,
  year: string,
  selectedDate?: ISelectedDate,
}

export interface IUIReducer {
  isModalOpen: boolean,
}

export interface IReminderReducer {
  selectedReminderId?: string,
  reminders: IReminder[];
}

export interface AppContextProps {
  children: ReactNode,
}

export type ActionsType = Record<NavigationActions, Date>

export interface IUiActions {
  handleModalChange(): void
}

export interface ISelectedDateParams {
  id: string;
  selectedDate: Date
}

export interface IDateActions {
  handleDateChange(date: Date, type: NavigationActions): void
  handleSetSelectedDate(params?: ISelectedDateParams): void
}

export interface IReminderActions {
  handleSetReminder(reminder: IReminder): void
  handleEditReminder(reminder: IReminder): void
  handleRemoveReminder(id: string): void
  handleSetSelectedReminder(selectedReminderId?: string): void
}

export interface IAppContext extends
  IDateReducer, IReminderReducer, IUIReducer, IReminderActions, IDateActions, IUiActions { }

export enum Actions {
  UPDATE_DATE = 'UPDATE_DATE',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  SET_REMINDER = 'SET_REMINDER',
  EDIT_REMINDER = 'EDIT_REMINDER',
  REMOVE_REMINDER = 'REMOVE_REMINDER',
  SET_SELECTED_DATE = 'SET_SELECTED_DATE',
  SET_SELECTED_REMINDER = 'SET_SELECTED_REMINDER'
}

