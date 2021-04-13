import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from '../components/elements';

interface OwnProps {
  totals: any;
}

type ContactPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {
  const { totalLoan, totalFee, totalApr } = props?.totals;

  return (
    <main>
      <span>
        Contact us and get {totalLoan}SEK total loan with {totalFee}SEK total fee and APR {totalApr}% !
      </span>
      <Link href="/">back to calculations</Link>
    </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    totals: state.totals,
  };
};

export default connect(mapStateToProps)(ContactPage);
