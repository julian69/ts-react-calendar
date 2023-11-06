import { FC, useContext } from 'react';

import { AppContext } from '@/context/constants'
import { classes } from './constants'

const ModalButton: FC = () => {
  const { handleModalChange } = useContext(AppContext)

  return (
    <button
      type="button"
      className={classes.modalButton}
      onClick={() => handleModalChange()}
    >
      Create Reminder
    </button>
  )
}

export default ModalButton 