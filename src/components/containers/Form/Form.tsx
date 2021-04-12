import React, { FunctionComponent, useState } from 'react';
import {connect} from 'react-redux';
import { addTest } from '../../../redux/actions';

interface OwnProps {
  addTest: any;
  data: any [];
}

type FormProps = JSX.IntrinsicElements['form'] & OwnProps;

const Form: FunctionComponent<FormProps> = props => {
  const [creditor, setCreditor] = useState('');
  const [loan, setLoan] = useState('');
  const [fee, setFee] = useState('');
  const [APR, setApr] = useState('');

  // to do - not working properly
//   //Redux
//   const { data } = props;

//   // local copy of redux data
//   const fullData: any[] = data || [];

const fullData: any[] = [];

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    // update local data - not working properly
    fullData.push({
      creditor,
      loan,
      fee,
      APR,
    });
    //state
    setCreditor('');
    setLoan('');
    setFee('');
    setApr('');
    //update Redux
    props.addTest(fullData);
  }

  return (
        <form onSubmit={handleOnSubmit}>
          <input
            type="text" 
            placeholder="Creditor Name"
            value={creditor}
            onChange={event => setCreditor(event.target.value)}
          />
            <input
            type="number" 
            placeholder="loan amount"
            value={loan}
            onChange={event => setLoan(event.target.value)}
          />
            <input
            type="number" 
            placeholder="Monthly fee"
            value={fee}
            onChange={event => setFee(event.target.value)}
          />
            <input
            type="text" 
            placeholder="APR"
            value={APR}
            onChange={event => setApr(event.target.value)}
          />
          <input type="submit"/>
        </form>

  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTest: (test:any) => dispatch(addTest(test))
  }
}

export default connect(null, mapDispatchToProps)(Form);