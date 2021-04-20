import React, { FunctionComponent } from 'react';
import Styles from './Layout.module.scss';

interface OwnProps {}

type LayoutProps = Omit<JSX.IntrinsicElements['main'], 'children'> & OwnProps;

const Layout: FunctionComponent<LayoutProps> = props => {
  const { children } = props;

  return <main className={Styles.content}>{children}</main>;
};

export default Layout;
