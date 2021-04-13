import React, { FunctionComponent } from 'react';
import styles from './Footer.module.scss';

interface OwnProps {}

type FooterProps = Omit<JSX.IntrinsicElements['footer'], 'children'> & OwnProps;

const Footer: FunctionComponent<FooterProps> = props => {
  const { className, ...rest } = props;

  return (
    <footer className={styles.footer} {...rest}>
      Footer here!
    </footer>
  );
};

export default Footer;
