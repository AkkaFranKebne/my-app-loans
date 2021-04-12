import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { Form, Table } from '../components/containers';
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
        <Form data={test}/>
        <Table data={test}/>
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