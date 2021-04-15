import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { arrowRight as Arrow } from '../../../assets/icons';
import { Icon } from '../../../components/elements';
import Styles from './Link.module.scss';

interface OwnProps {
  href: string;
}

type LinkProps = JSX.IntrinsicElements['a'] & OwnProps;

const Link: FunctionComponent<LinkProps> = props => {
  const { children, href } = props;

  return (
    <NavLink to={href} activeClassName={Styles.link}>
      {children}
      <Icon icon={Arrow} />
    </NavLink>
  );
};

export default Link;
