import React, { ReactElement } from 'react';
import classNames from 'classnames';

export function widthNativeProps(props: any, element: ReactElement) {
  const ele = { ...element.props };
  if (props.className) {
    ele.className = classNames(ele.className, props.className);
  }

  if (props.style) {
    ele.style = {
      ...ele.style,
      ...props.style,
    };
  }

  return React.cloneElement(element, ele);
}
