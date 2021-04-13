import React, { FunctionComponent, useState } from 'react';
import {connect} from 'react-redux';
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
  }
}

type FormProps = JSX.IntrinsicElements['form'] & OwnProps;

const Form: FunctionComponent<FormProps> = props => {
  const [creditor, setCreditor] = useState('');
  const [loan, setLoan] = useState(0);
  const [fee, setFee] = useState(0);
  const [apr, setApr] = useState(0);

  // to do - not working properly
  //Redux
  const { data, totals } = props;
  const { totalLoan, totalFee, totalApr } = totals;


//   // local copy of redux data
  const fullData: any = Array.isArray(data) ?  {data: []} : data;
 
// const fullData: any = {data: []};

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    // update local data
    fullData.data.push({
      creditor,
      loan,
      fee,
      apr,
    });
    //update Redux
    props.addTest(fullData);
    props.addLoan(totalLoan + loan);
    props.addFee(totalFee + fee);
    props.addApr(totalApr + apr);
    //state
    setCreditor('');
    setLoan(0);
    setFee(0);
    setApr(0);
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
            onChange={event => setLoan(parseFloat(event.target.value))}
          />
            <input
            type="number" 
            placeholder="Monthly fee"
            value={fee}
            onChange={event => setFee(parseFloat(event.target.value))}
          />
            <input
            type="text" 
            placeholder="APR"
            value={apr}
            onChange={event => setFee(parseFloat(event.target.value))}
          />
          <input type="submit"/>
        </form>

  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTest: (test:any) => dispatch(addTest(test)),
    addLoan: (totalLoan:any) => dispatch(addLoan(totalLoan)),
    addFee: (totalFee:any) => dispatch(addFee(totalFee)),
    addApr: (totalApr:any) => dispatch(addApr(totalApr)),
  }
}

export default connect(null, mapDispatchToProps)(Form);