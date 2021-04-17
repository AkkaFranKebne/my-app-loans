import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { CallToAction } from '../components/presentional';
import { Form, Table, Layout } from '../components/containers';
import { connect } from 'react-redux';
import { ITotals } from '../types/totals';
import { ITestData } from '../types/test';
import { IStateState } from '../redux/stateTypes';

interface OwnProps {
  test: ITestData;
  totals: ITotals;
}

type MainPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { test, totals } = props;
  const showLink = !Array.isArray(totals);

  const callToActionData = {
    header: 'What loan reduction you can get?',
    text: 'Put all your loans here:',
  };

  return (
    <Layout>
      <CallToAction {...callToActionData} />
      <Form data={test} total={totals} />
      <Table data={test} total={totals} />
      {showLink && <Link href="/contact">See more</Link>}
    </Layout>
  );
};

const mapStateToProps = (state: IStateState) => {
  return {
    test: state.test,
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(MainPage);
