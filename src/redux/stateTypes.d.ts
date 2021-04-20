import { ITotals } from '../types/totals';
import { ITestData } from '../types/test';

export interface IStateState {
  totals: ITotals;
  test: ITestData;
}

export interface IState {
  state: IStateState;
}
