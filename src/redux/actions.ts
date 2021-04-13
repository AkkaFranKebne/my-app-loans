export function addTest(test: any) {
  return {
    type: 'ADD_TEST',
    payload: test,
  };
}

export function addLoan(totalLoan: any) {
  return {
    type: 'ADD_LOAN',
    payload: totalLoan,
  };
}

export function addFee(totalFee: any) {
  return {
    type: 'ADD_FEE',
    payload: totalFee,
  };
}

export function addApr(totalApr: any) {
  return {
    type: 'ADD_APR',
    payload: totalApr,
  };
}
