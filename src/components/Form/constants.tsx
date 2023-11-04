import { FormFieldsNames } from "@/types/reminders";

export const colors = [
  'bg-purple-500',
  'bg-sky-500',
  'bg-red-500',
  'bg-yellow-300',
  'bg-orange-500'
]

export interface IField {
  value: string;
  onChange: (type: FormFieldsNames, value: string) => void;
}

export interface IDescription extends  Omit<IField, 'value'>  {
  value?: string
}

export interface IDateField {
  value: Date;
  onChange: (type: FormFieldsNames, value: Date) => void;
}
