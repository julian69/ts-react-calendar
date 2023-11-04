import { INIT } from './constants'
import { FormFieldsNames } from "@/types/reminders";

export const getInitialState = (date: Date) => ({
  ...INIT,
  [FormFieldsNames.DATE]: date
})