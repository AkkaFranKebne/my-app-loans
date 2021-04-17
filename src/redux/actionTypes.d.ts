import { ITotals } from '../types/totals';
import { ITestData } from '../types/test';

export type AddTestAction = {
  type: 'ADD_TEST';
  payload: ITestData;
};

export type AddTotalsAction = {
  type: 'ADD_TOTALS';
  payload: ITotals;
};
