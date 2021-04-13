import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface OwnProps {
  href: string;
}

type LinkProps = JSX.IntrinsicElements['a'] & OwnProps;

const Link: FunctionComponent<LinkProps> = props => {
  const { className, children, href } = props;

  return (
    <NavLink to={href} activeClassName={className}>
      {children}
    </NavLink>
  );
};

export default Link;
