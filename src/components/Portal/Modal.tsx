import { FC, useContext, useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Footer from './Footer'
import Form from '@/components/Form/Form'
import { AppContext } from '@/context/constants'
import { FormFieldsNames, IFormFields, IReminder } from '@/types/reminders'
import { getInitialState } from './utils'

const Modal: FC = () => {
  const { date, isModalOpen, handleModalChange, selectedDate, reminders, selectedReminderId } = useContext(AppContext);
  const [formFields, setFormFields] = useState<IFormFields>(getInitialState(date))

  const activeReminder: IReminder = reminders.filter(r => r.id === selectedReminderId)[0]

  useEffect(() => {
    const newState = activeReminder?.[FormFieldsNames.DATE]
      ? activeReminder
      : getInitialState(selectedDate?.date || date)

    setFormFields(newState)
  }, [selectedDate, selectedReminderId])

  const handleChange = (type: FormFieldsNames, value: string | Date) => {
    const newValues = {
      ...formFields,
      [type]: type === FormFieldsNames.DATE ? value : String(value)
    }

    setFormFields(newValues)
  }

  const handleOnClose = () => handleModalChange()

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={handleOnClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center text-center sm:items-center p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform w-screen h-screen sm:max-w-screen max-height-screen m-0 overflow-auto md:overflow-hidden bg-white text-left sm:shadow-xl transition-all md:my-8 md:w-full md:max-w-lg md:h-auto
              ">
                <div className="h-screen flex flex-col sm:h-auto">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 h-full">
                    <Form formFields={formFields} onChange={handleChange} />
                  </div>
                  <Footer formFields={formFields} onClose={handleOnClose} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal