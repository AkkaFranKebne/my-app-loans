import React, { FunctionComponent, useState } from 'react';
import {connect} from 'react-redux';
import { addTest } from '../redux/actions';

interface OwnProps {
  addTest: any;
}

type MainPageProps = Omit<JSX.IntrinsicElements['article'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    props.addTest(value);
    setValue('');
  }

  return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <textarea 
            placeholder="test"
            value={value}
            onChange={handleOnChange}
          />
          <input type="submit"/>
        </form>
      </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTest: (test:any) => dispatch(addTest(test))
  }
}

export default connect(null, mapDispatchToProps)(MainPage);