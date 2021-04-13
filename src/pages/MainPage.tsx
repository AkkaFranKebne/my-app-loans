import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { Form, Table } from '../components/containers';
import { connect } from 'react-redux';

interface OwnProps {
  test: any;
  totals: any;
}

type MainPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { test, totals } = props;
  return (
    <main>
      <Form data={test} total={totals} />
      <Table data={test} total={totals} />
      <Link href="/contact">contact us</Link>
    </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test,
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(MainPage);
