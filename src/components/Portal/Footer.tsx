
import { FC, useContext, useId } from 'react';

import { AppContext } from '@/context/constants'
import { classes } from './constants';
import { FormFieldsNames, IReminder } from '@/types/reminders';
import { Optional } from '@/lib/types';

interface Props {
  formFields: Optional<IReminder, 'id'>;
  onClose: () => void;
}

const Footer: FC<Props> = ({ formFields, onClose }) => {
  const reminderId = useId()
  const { handleSetReminder, handleEditReminder, handleRemoveReminder } = useContext(AppContext)

  const isDisabled = !formFields.TITLE.length || !formFields.COLOR.length;

  const handleSave = () => {
    if (formFields?.id) {
      // TS: the button will only show up if there is an id.
      // We can assume the id exists when this event is triggered
      handleEditReminder(formFields as IReminder)
    } else {
      handleSetReminder({
        id: reminderId,
        [FormFieldsNames.TITLE]: formFields[FormFieldsNames.TITLE],
        [FormFieldsNames.COLOR]: formFields[FormFieldsNames.COLOR],
        [FormFieldsNames.DESCRIPTION]: formFields[FormFieldsNames.DESCRIPTION],
        [FormFieldsNames.DATE]: formFields[FormFieldsNames.DATE],
      })
    }

    onClose()
  }

  const handleDelete = () => {
    // TS: the button will only show up if there is an id.
    // We can assume the id exists when this event is triggered
    handleRemoveReminder(formFields.id!)
    onClose()
  }

  return (
    <footer className={classes.footer}>
      {
        formFields?.id
          ? <button
            type="button"
            onClick={handleDelete}
            className={classes.deleteBtn}
          >
            Delete Reminder
          </button>
          : null
      }
      <div className={classes.saveContainer}>

        <button
          type="button"
          onClick={onClose}
          className={classes.cancelBtn}
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={isDisabled}
          onClick={handleSave}
          className={`${classes.saveBtn} ${isDisabled ? 'disabled:bg-slate-400' : ''}`}
        >
          Save
        </button>
      </div>
    </footer >
  )
}

export default Footer 