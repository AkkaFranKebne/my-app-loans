import React, { FunctionComponent } from 'react';

interface OwnProps {}

type MainPageProps = Omit<JSX.IntrinsicElements['article'], 'children'> & OwnProps;

const MainPage: FunctionComponent<MainPageProps> = props => {

  return (
      <div>I am main page</div>
  );
};

export default MainPage;