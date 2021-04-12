import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { Form } from '../components/containers';
import { connect } from 'react-redux';

interface OwnProps {
  test: any;
}

type MainPageProps = Omit<JSX.IntrinsicElements['div'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { test } = props;
  console.log('main page test', test)

  return (
      <div>
        <Form />
        <Link href='/contact'>contact us</Link>
      </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(MainPage);