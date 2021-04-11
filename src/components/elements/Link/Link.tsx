import React, { FunctionComponent } from 'react';

type LinkProps = JSX.IntrinsicElements['a'];

const Link: FunctionComponent<LinkProps> = props => {
  const { className, ...rest } = props;

  return (
    <a className={className} {...rest} />
  );
};

export default Link;