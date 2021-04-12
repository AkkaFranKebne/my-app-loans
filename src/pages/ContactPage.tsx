import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

interface OwnProps {
  test: any;
}

type ContactPageProps = Omit<JSX.IntrinsicElements['article'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {
  const { test } = props;
  console.log('contact page test', test)
  return (
      <div>I am contact page</div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(ContactPage);
