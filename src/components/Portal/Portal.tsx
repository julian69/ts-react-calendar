import { createPortal } from 'react-dom'
import { FC } from 'react'

import Modal from './Modal'

const Portal: FC = () => createPortal(<Modal />, document.body)

export default Portal