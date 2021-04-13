import React, { FunctionComponent } from 'react';
import { Link } from '../components/elements';
import { Form, Table } from '../components/containers';
import { connect } from 'react-redux';

interface OwnProps {
  test: any;
  totalLoan: any;
  totalFee: any;
  totalApr: any;
}

type MainPageProps = Omit<JSX.IntrinsicElements['div'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {
  const { test, ...rest } = props;

  return (
      <div>
        <Form data={test} totals={{...rest}}/>
        <Table data={test} totals={{...rest}}/>
        <Link href='/contact'>contact us</Link>
      </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test,
    totalLoan: state.totalLoan,
    totalFee: state.totalFee,
    totalApr: state.totalApr,
  }
}

export default connect(mapStateToProps)(MainPage);