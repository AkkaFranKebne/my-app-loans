export function addTest(test: any) {
  return {
    type: 'ADD_TEST',
    payload: test,
  };
}

export function addTotals(totals: any) {
  return {
    type: 'ADD_TOTALS',
    payload: totals,
  };
}
