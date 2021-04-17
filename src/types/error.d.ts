export interface IError {
  creditor: string;
  loan: string;
  fee: string;
  apr: string;
}

export type IErrorData = IError | {};
