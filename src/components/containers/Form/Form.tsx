import cx from 'clsx';
import React, { FunctionComponent, useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { addTest, addTotals } from '../../../redux/actions';
import Styles from './Form.module.scss';
import { IValidate, IErrorMessage } from '../../../types/validate';
import { ITotals } from '../../../types/totals';
import { ITestData, ITest } from '../../../types/test';
import { IError, IErrorData } from '../../../types/error';

type AddTest = (test: ITestData) => void;
type AddTotals = (totals: ITotals) => void;

interface OwnProps {
  addTest: AddTest;
  addTotals: AddTotals;
  data: ITestData;
  total: ITotals;
}

type FormProps = JSX.IntrinsicElements['form'] & OwnProps;

const defaultValueState: ITest = {
  creditor: '',
  loan: 0,
  fee: 0,
  apr: 0,
};

const defaultErrorState: IErrorData = {};

const checkErrorType = (checkedError: IErrorData): checkedError is IError => {
  if (checkedError as IError) {
    return true;
  }
  return false;
};

const Form: FunctionComponent<FormProps> = props => {
  const [values, setValues] = useState(defaultValueState);
  const [errors, setErrors] = useState(defaultErrorState);

  // to do - not working properly
  //Redux
  const { data, total } = props;

  //   // local copy of redux data
  const fullData: ITestData = Array.isArray(data) ? { data: [] } : data;
  const fullTotal: ITotals = Array.isArray(total) ? { totalLoan: 0, totalFee: 0, totalApr: 0 } : total;

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

  const validate: IValidate = {
    creditor: textValidation,
    loan: numberValidation,
    fee: numberValidation,
    apr: percentageValidation,
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value: newValue, type } = event.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validate the form
    const formValidation = Object.keys(values)
      .map((key: string) => {
        //@ts-ignore
        const newError: IErrorMessage = validate[key](values[key]);
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
        // @todo what is the apr calc?
        totalApr: (fullTotal.totalApr + values.apr) / 2,
      });
      //state
      setValues(defaultValueState);
      setErrors({});
    } else {
      //show errors
      setErrors(
        //@ts-ignore
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
        <label
          htmlFor="creditor"
          className={checkErrorType(errors) ? cx({ [Styles.inputError]: errors.creditor }) : ''}
        >
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
        {checkErrorType(errors) && errors.creditor && <span className={Styles.error}>{errors.creditor}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="loan" className={checkErrorType(errors) ? cx({ [Styles.inputError]: errors.loan }) : ''}>
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
        {checkErrorType(errors) && errors.loan && <span className={Styles.error}>{errors.loan}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="fee" className={checkErrorType(errors) ? cx({ [Styles.inputError]: errors.fee }) : ''}>
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
        {checkErrorType(errors) && errors.fee && <span className={Styles.error}>{errors.fee}</span>}
      </div>
      <div className={Styles.labelWrapper}>
        <label htmlFor="apr" className={checkErrorType(errors) ? cx({ [Styles.inputError]: errors.apr }) : ''}>
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
        {checkErrorType(errors) && errors.apr && <span className={Styles.error}>{errors.apr}</span>}
      </div>
      <input type="submit" />
    </form>
  );
};

const mapDispatchToProps = (
  dispatch: (any: { type: string; payload: ITestData } | { type: string; payload: ITotals }) => void,
) => {
  return {
    addTest: (test: ITestData) => dispatch(addTest(test)),
    addTotals: (totals: ITotals) => dispatch(addTotals(totals)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
