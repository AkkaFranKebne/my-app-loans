import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from '../components/elements';
import { Layout } from '../components/containers';

interface OwnProps {
  totals: any;
}

type ContactPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {
  const { totalLoan, totalFee, totalApr } = props?.totals;

  return (
    <Layout>
      <span>
        Contact us and get {totalLoan}SEK total loan with {totalFee}SEK total fee and APR {totalApr}% !
      </span>
      <Link href="/">back</Link>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(ContactPage);
