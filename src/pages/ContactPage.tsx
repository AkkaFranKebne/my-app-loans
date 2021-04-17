import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from '../components/elements';
import { Layout } from '../components/containers';
import { CallToAction } from '../components/presentional';
import { numberWithCommas } from '../utils/globals';
import { ITotals } from '../types/totals';
import { IStateState } from '../redux/stateTypes';

interface OwnProps {
  totals: ITotals;
}

type ContactPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {
  const { totalLoan, totalFee, totalApr } = props?.totals;

  const callToActionData = {
    header: `Get ${numberWithCommas(totalLoan)} SEK total loan with us!`,
    text: `with ${numberWithCommas(totalFee)} SEK total fee and APR ${totalApr.toFixed(2)}%`,
  };

  return (
    <Layout>
      <CallToAction {...callToActionData} />
      <Link href="/">Try more</Link>
    </Layout>
  );
};

const mapStateToProps = (state: IStateState) => {
  return {
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(ContactPage);
