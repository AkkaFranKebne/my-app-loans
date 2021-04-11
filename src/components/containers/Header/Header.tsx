import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import cx from 'clsx';

interface OwnProps {
  test: any;
}

type HeaderProps = Omit<JSX.IntrinsicElements['header'], 'children'> & OwnProps;

const Header: FunctionComponent<HeaderProps> = props => {
  const { test, className, ...rest } = props;
  console.log('test', test)
  const headerClassName = cx({
    [styles.header]: true,
    ...(className && { [className]: true }),
  });

  return (
    <header className={headerClassName} {...rest}> 
      Header here
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(Header);