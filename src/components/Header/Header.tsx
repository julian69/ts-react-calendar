import { FC, useContext } from 'react'

import Navigation from '@/components/Navigation/Navigation'
import ModalButton from '../Portal/ModalButton'
import { classes } from './constants'
import { AppContext } from '@/context/constants'

const Header: FC = () => {
  const { month, year } = useContext(AppContext)

  return (
    <header className={classes.header}>
      <h2 className={classes.heading}>
        <span className="font-bold">{month} </span> 
        <span>{year}</span>
      </h2>
      <div className={classes.actions}>
        <Navigation />
        <ModalButton />
      </div>
    </header>
  )
}

export default Header