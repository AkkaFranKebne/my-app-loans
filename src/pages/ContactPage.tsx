import React, { FunctionComponent } from 'react';

interface OwnProps {}

type ContactPageProps = Omit<JSX.IntrinsicElements['article'], 'children'> & OwnProps;

const ContactPage: FunctionComponent<ContactPageProps> = props => {

  return (
      <div>I am contact page</div>
  );
};

export default ContactPage;
