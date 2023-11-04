import { FC, useReducer } from "react"

import { AppContext } from "./constants"
import useReminder from "./hooks/useReminder";
import useDate from "./hooks/useDate";
import { AppContextProps } from "./types";
import { dateReducerInitialState, dateReducer } from "./reducers/dateReducer";
import { reminderReducerInitialState, reminderReducer } from "./reducers/reminderReducer";
import { uiReducer, uiReducerInitialState } from "./reducers/uiReducer";
import useUi from "./hooks/useUi";

const AppContextProvider: FC<AppContextProps> = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(uiReducer, uiReducerInitialState);
  const [dateState, dateDispatch] = useReducer(dateReducer, dateReducerInitialState);
  const [reminderState, reminderDispatch] = useReducer(reminderReducer, reminderReducerInitialState);

  const { handleModalChange } = useUi(uiDispatch)
  const { handleDateChange, handleSetSelectedDate } = useDate(dateDispatch)
  const { handleSetReminder, handleEditReminder, handleRemoveReminder, handleSetSelectedReminder } = useReminder(reminderDispatch)

  return (
    <AppContext.Provider value={{
      ...uiState,
      ...dateState,
      ...reminderState,
      handleDateChange,
      handleModalChange,
      handleSetReminder,
      handleEditReminder,
      handleRemoveReminder,
      handleSetSelectedDate,
      handleSetSelectedReminder
    }}>
      {children}
    </AppContext.Provider >
  );
};

export default AppContextProvider