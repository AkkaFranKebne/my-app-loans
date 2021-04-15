import React, { FunctionComponent, SVGProps } from 'react';
import Styles from './Icon.module.scss';
import cx from 'clsx';
// import displayStyles from 'styles/global/display.module.scss';

interface OwnProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  size?: number;
  height?: number;
  width?: number;
}

type IconProps = Omit<JSX.IntrinsicElements['span'], 'children'> & OwnProps;

const Icon: FunctionComponent<IconProps> = props => {
  const { size = 16, height, width, icon, className, ...rest } = props;

  const iconClassName = cx({
    // [displayStyles.centerInlineBoth]: true,
    [Styles.icon]: true,

    ...(className && { [className]: true }),
  });

  const Icon = icon;

  return (
    <span style={{ width: `${width || size}px`, height: `${height || size}px` }} className={iconClassName} {...rest}>
      <Icon />
    </span>
  );
};

export default Icon;
