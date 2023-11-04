import { FC } from 'react'

import AppContextProvider from '@/context/AppContext'
import Calendar from '@/components/Calendar/Calendar'
import Portal from '@/components/Portal/Portal'

const App: FC = () => (
  <AppContextProvider>
    <Calendar />
    <Portal />
  </AppContextProvider>
)

export default App;
