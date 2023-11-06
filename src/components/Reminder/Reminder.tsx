import { FC, useContext } from 'react'

import { classes } from './constants'
import { AppContext } from '@/context/constants'
import { FormFieldsNames, IReminder } from '@/types/reminders'

interface Props {
  reminder: IReminder
}

const Reminder: FC<Props> = ({ reminder }) => {
  const { handleSetSelectedReminder, handleModalChange } = useContext(AppContext)

  const handleReminderOnClick = (selectedReminderId: string) => {
    handleModalChange()
    handleSetSelectedReminder(selectedReminderId)
  }

  return (
    <button
      type="button"
      className={classes.btn}
      aria-label="Remove reminder"
      onClick={() => handleReminderOnClick(reminder.id)}>
      <span className={`${classes.badge} ${reminder[FormFieldsNames.COLOR]}`}>
        <span>{reminder[FormFieldsNames.TITLE]}</span>
      </span>
    </button>
  )
}

export default Reminder