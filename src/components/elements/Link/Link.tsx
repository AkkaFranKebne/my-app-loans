import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './Link.module.scss';

interface OwnProps {
  href: string;
}

type LinkProps = JSX.IntrinsicElements['a'] & OwnProps;

const Link: FunctionComponent<LinkProps> = props => {
  const { children, href } = props;

  return (
    <NavLink to={href} activeClassName={Styles.button}>
      {children}
    </NavLink>
  );
};

export default Link;
