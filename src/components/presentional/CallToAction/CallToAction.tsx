import React, { FunctionComponent } from 'react';
import Styles from './CallToAction.module.scss';

interface OwnProps {
  header: any;
  text: any;
}

type CallToActionProps = JSX.IntrinsicElements['div'] & OwnProps;

const CallToAction: FunctionComponent<CallToActionProps> = props => {
  const { header, text } = props;
  return (
    <div className={Styles.container}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default CallToAction;
