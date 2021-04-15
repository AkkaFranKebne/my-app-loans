import React, { FunctionComponent } from 'react';
import Styles from './CallToAction.module.scss';

interface OwnProps {}

type CallToActionProps = JSX.IntrinsicElements['div'] & OwnProps;

const CallToAction: FunctionComponent<CallToActionProps> = props => {
  return (
    <div className={Styles.container}>
      <h2>What loan reduction you can get?</h2>
      <p>Put all your loans here:</p>
    </div>
  );
};

export default CallToAction;
