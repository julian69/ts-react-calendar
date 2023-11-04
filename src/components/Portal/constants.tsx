import { FormFieldsNames } from "@/types/reminders"

export const classes = {
  footer: 'flex flex-col flex-col-reverse sm:flex sm:justify-between sm:flex-row bg-gray-100 px-4 py-3',
  saveContainer: 'flex w-full justify-end flex-col sm:flex-row flex-col-reverse mt-1 sm:mt-0',
  saveBtn: 'inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto sm:mr-2 sm:flex-row-reverse w-full',
  deleteBtn: 'inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-red-500 sm:w-auto min-w-[200px] w-full',
  cancelBtn: "my-1 sm:my-0 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 shadow-sm hover:bg-gray-100 sm:mt-0 sm:w-auto",
  modalButton: "mt-2 inline-flex w-full justify-center rounded sm:ml-2 px-3 py-2 shadow-sm hover:bg-gray-100 sm:mt-0 sm:w-auto text-white bg-sky-600 hover:bg-sky-500"
}

export const INIT = {
  [FormFieldsNames.TITLE]: '',
  [FormFieldsNames.DESCRIPTION]: '',
  [FormFieldsNames.COLOR]: '',
  [FormFieldsNames.DATE]: undefined
}

