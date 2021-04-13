import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from '../components/elements';

interface OwnProps {
  totalLoan: any;
  totalFee: any;
  totalApr: any;
}

type ContactPageProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {
  const { totalLoan, totalFee, totalApr } = props;

  return (
      <main>
        <span>Contact us and get {totalLoan}SEK total loan with {totalFee}SEK total fee and APR {totalApr}% !</span>
        <Link href='/'>back to calculations</Link>
      </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    totalLoan: state.totalLoan,
    totalFee: state.totalFee,
    totalApr: state.totalApr,
  }
}

export default connect(mapStateToProps)(ContactPage);
