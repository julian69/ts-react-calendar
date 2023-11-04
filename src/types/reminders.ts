export enum FormFieldsNames {
  TITLE = 'TITLE',
  DESCRIPTION = 'DESCRIPTION',
  COLOR = 'COLOR',
  DATE = 'DATE'
}

export interface IFormFields {
  [FormFieldsNames.TITLE]: string;
  [FormFieldsNames.DESCRIPTION]?: string;
  [FormFieldsNames.COLOR]: string;
  [FormFieldsNames.DATE]: Date;
}

export interface IReminder extends IFormFields {
  id: string
}
