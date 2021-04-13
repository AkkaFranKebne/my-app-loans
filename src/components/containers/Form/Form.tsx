import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { addTest, addTotals } from '../../../redux/actions';

interface OwnProps {
  addTest: any;
  addTotals: any;
  data: any;
  total: {
    totalLoan: any;
    totalFee: any;
    totalApr: any;
  };
}

type FormProps = JSX.IntrinsicElements['form'] & OwnProps;

const defaultValueState = {
  creditor: '',
  loan: 0,
  fee: 0,
  apr: 0,
};

const Form: FunctionComponent<FormProps> = props => {
  const [values, setValues] = useState(defaultValueState);

  // to do - not working properly
  //Redux
  const { data, total } = props;

  //   // local copy of redux data
  const fullData: any = Array.isArray(data) ? { data: [] } : data;
  const fullTotal: any = Array.isArray(total) ? { totalLoan: 0, totalFee: 0, totalApr: 0 } : total;

  const handleChange = (event: any) => {
    const { name, value: newValue, type } = event.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    // update local data
    fullData.data.push(values);
    //update Redux
    props.addTest(fullData);
    props.addTotals({
      totalLoan: fullTotal.totalLoan + values.loan,
      totalFee: fullTotal.totalFee + values.fee,
      totalApr: fullTotal.totalApr + values.apr,
    });
    //state
    setValues(defaultValueState);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="creditor">Creditor:</label>
      <input
        type="text"
        name="creditor"
        id="creditor"
        placeholder="Creditor"
        value={values.creditor}
        onChange={event => handleChange(event)}
      />
      <label htmlFor="loan">Loan (SEK):</label>
      <input type="number" name="loan" id="loan" required value={values.loan} onChange={event => handleChange(event)} />
      <label htmlFor="fee">Fee (SEK):</label>
      <input type="number" name="fee" id="fee" required value={values.fee} onChange={event => handleChange(event)} />
      <label htmlFor="APR">APR (%):</label>
      <input
        type="number"
        step="0.01"
        name="apr"
        id="apr"
        value={values.apr}
        required
        onChange={event => handleChange(event)}
      />
      <input type="submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTest: (test: any) => dispatch(addTest(test)),
    addTotals: (totals: any) => dispatch(addTotals(totals)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
