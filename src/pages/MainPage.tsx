import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { CallToAction } from '../components/presentional';
import { Form, Table, Layout } from '../components/containers';
import { connect } from 'react-redux';

interface OwnProps {
  test: any;
  totals: any;
}

type MainPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { test, totals } = props;
  console.log('totals', totals);
  const showLink = !Array.isArray(totals);

  return (
    <Layout>
      <CallToAction />
      <Form data={test} total={totals} />
      <Table data={test} total={totals} />
      {showLink && <Link href="/contact">See more</Link>}
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test,
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(MainPage);
