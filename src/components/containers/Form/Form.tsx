import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { addTest, addLoan, addFee, addApr } from '../../../redux/actions';

interface OwnProps {
  addTest: any;
  addLoan: any;
  addFee: any;
  addApr: any;
  data: any;
  totals: {
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
  // const [creditor, setCreditor] = useState('');
  // const [loan, setLoan] = useState(0);
  // const [fee, setFee] = useState(0);
  // const [apr, setApr] = useState(0);

  // to do - not working properly
  //Redux
  const { data, totals } = props;
  const { totalLoan, totalFee, totalApr } = totals;

  //   // local copy of redux data
  const fullData: any = Array.isArray(data) ? { data: [] } : data;

  const handleChange = (event: any) => {
    const { name, value: newValue, type } = event.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });

    console.log('values', values);
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    // update local data
    fullData.data.push(values);
    //update Redux
    props.addTest(fullData);
    props.addLoan(totalLoan + values.loan);
    props.addFee(totalFee + values.fee);
    props.addApr(totalApr + values.apr);
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
      <input type="number" name="apr" id="apr" value={values.apr} required onChange={event => handleChange(event)} />
      <input type="submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTest: (test: any) => dispatch(addTest(test)),
    addLoan: (totalLoan: any) => dispatch(addLoan(totalLoan)),
    addFee: (totalFee: any) => dispatch(addFee(totalFee)),
    addApr: (totalApr: any) => dispatch(addApr(totalApr)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
