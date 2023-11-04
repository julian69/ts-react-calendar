import { createContext } from "react"

import { IAppContext } from "./types"
import { reminderReducerInitialState } from "./reducers/reminderReducer"
import { dateReducerInitialState } from "./reducers/dateReducer"
import { uiReducerInitialState } from "./reducers/uiReducer"

export const AppContext = createContext<IAppContext>({
  ...uiReducerInitialState,
  ...reminderReducerInitialState,
  ...dateReducerInitialState,
  handleDateChange: () => { },
  handleModalChange: () => { },
  handleSetReminder: () => { },
  handleEditReminder: () => { },
  handleRemoveReminder: () => { },
  handleSetSelectedDate: () => { },
  handleSetSelectedReminder: () => { },
})