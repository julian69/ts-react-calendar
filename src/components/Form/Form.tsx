import { FC } from "react"
import Title from "./Title";
import Description from "./Description";
import Colors from "./Colors";
import Date from "./Date";
import { FormFieldsNames, IFormFields } from "@/types/reminders";

interface Props {
  formFields: IFormFields;
  onChange: (type: FormFieldsNames, value: string | Date) => void;
}

const Form: FC<Props> = ({ formFields, onChange }) => (
  <form>
    <div className="space-y-12">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Reminder</h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">Create a new reminder!</p>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <Title value={formFields[FormFieldsNames.TITLE]} onChange={onChange} />
          <Date value={formFields[FormFieldsNames.DATE]} onChange={onChange} />
          <Description value={formFields[FormFieldsNames.DESCRIPTION]} onChange={onChange} />
          <Colors value={formFields[FormFieldsNames.COLOR]} onChange={onChange} />
        </div>
      </div>
    </div>
  </form>
)

export default Form
