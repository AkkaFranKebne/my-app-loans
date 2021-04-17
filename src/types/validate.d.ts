export type IErrorMessage =
  | 'This field is required'
  | 'Invalid characters'
  | 'Write at least three characters'
  | 'Write a proper number'
  | 'Write a proper percentage'
  | null;

export type ICreditorErrorMessage = (
  fieldValue: string,
) => 'This field is required' | 'Invalid characters' | 'Write at least three characters' | null;

export type ILoanErrorMessage = (num: number) => 'This field is required' | 'Write a proper number' | null;

export type IFeeErrorMessage = (num: number) => 'This field is required' | 'Write a proper number' | null;

export type IAprErrorMessage = (perc: number) => 'This field is required' | 'Write a proper percentage' | null;

export interface IValidate {
  creditor: ICreditorErrorMessage;
  loan: ILoanErrorMessage;
  fee: IFeeErrorMessage;
  apr: IAprErrorMessage;
}
