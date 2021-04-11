import React, { FunctionComponent } from 'react';
import styles from './Header.module.scss';
import cx from 'clsx';

interface OwnProps {}

type HeaderProps = Omit<JSX.IntrinsicElements['header'], 'children'> & OwnProps;

const Header: FunctionComponent<HeaderProps> = props => {
  const { className, ...rest } = props;
  const headerClassName = cx({
    [styles.header]: true,
    ...(className && { [className]: true }),
  });

  return (
    <header className={headerClassName} {...rest}> 
      Header here..
    </header>
  );
};

export default Header;