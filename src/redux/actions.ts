import { ITotals } from '../types/totals';
import { ITestData } from '../types/test';

export function addTest(test: ITestData) {
  return {
    type: 'ADD_TEST',
    payload: test,
  };
}

export function addTotals(totals: ITotals) {
  return {
    type: 'ADD_TOTALS',
    payload: totals,
  };
}
