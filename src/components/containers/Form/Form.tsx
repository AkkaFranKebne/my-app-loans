import cx from 'clsx';
import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { addTest, addTotals } from '../../../redux/actions';
import Styles from './Form.module.scss';

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

  //validation functions
  const textValidation = (fieldValue: string) => {
    if (fieldValue.trim() === '') {
      return `This field is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
      return `Write at least three characters`;
    }
    return null;
  };

  const numberValidation = (num: number) => {
    if (!num) {
      return 'This field is required';
    }
    if (num < 0) {
      return 'Write a proper number';
    }
    return null;
  };

  const percentageValidation = (perc: number) => {
    if (!perc) {
      return 'This field is required';
    }
    if (perc > 100) {
      return 'Write a proper percentage';
    }
    if (perc < 0) {
      return 'Write a proper percentage';
    }
    return null;
  };

  const validate = {
    creditor: textValidation,
    loan: numberValidation,
    fee: numberValidation,
    apr: percentageValidation,
  };

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

    // validate the form
    const formValidation = Object.keys(values)
      .map(key => {
        // @ts-ignore
        const newError = validate[key](values[key]);
        return newError && { [key]: newError };
      })
      .filter(error => error !== null);

    const noErrors = formValidation.length < 1;

    if (noErrors) {
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
      setErrors({});
    } else {
      //show errors
      setErrors(
        formValidation.reduce((acc, error) => {
          return {
            ...acc,
            ...error,
          };
        }),
      );
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={Styles.form} autoComplete="off">
      <div className={Styles.labelWrapper}>
        <label htmlFor="creditor" className={cx({ [Styles.inputError]: errors.creditor })}>
          Creditor:
          <input
            type="text"
            name="creditor"
            id="creditor"
            placeholder="Write here..."
            value={values.creditor}
            onChange={event => handleChange(event)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>

        {/* @ts-ignore */}
        {errors.creditor && <span className={Styles.error}>{errors.creditor}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="loan" className={cx({ [Styles.inputError]: errors.loan })}>
          Loan (SEK):
          <input
            type="number"
            name="loan"
            id="loan"
            required
            value={values.loan}
            onChange={event => handleChange(event)}
          />
        </label>
        {/* @ts-ignore */}
        {errors.loan && <span className={Styles.error}>{errors.loan}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="fee" className={cx({ [Styles.inputError]: errors.fee })}>
          Fee (SEK):
          <input
            type="number"
            name="fee"
            id="fee"
            required
            value={values.fee}
            onChange={event => handleChange(event)}
          />
        </label>
        {/* @ts-ignore */}
        {errors.fee && <span className={Styles.error}>{errors.fee}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="apr" className={cx({ [Styles.inputError]: errors.apr })}>
          APR (%):
          <input
            type="number"
            step="0.01"
            name="apr"
            id="apr"
            value={values.apr}
            onChange={event => handleChange(event)}
          />
        </label>
        {/* @ts-ignore */}
        {errors.apr && <span className={Styles.error}>{errors.apr}</span>}
      </div>
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
