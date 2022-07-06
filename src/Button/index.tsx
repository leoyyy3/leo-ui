import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import useWindowSize from '../hooks/useWindowSize';
import { defaultConfig } from '../ConfigProvider/ConfigContext';
import Icon from '../Icon';
import '../style/icon/iconfont.css';
import './button.less';

import { widthNativeProps } from '../utils/native-props';
import classNames from 'classnames';

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean | 'auto';
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | Promise<void> | unknown;
  type?: 'submit' | 'reset' | 'button';
  shape?: 'default' | 'rounded' | 'rectangular';
  children?: React.ReactNode;
};

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

const classPrefix = 'leo-button';

export default (bp: ButtonProps) => {
  const props = { ...defaultProps, ...bp };

  return widthNativeProps(
    props,
    <button
      type={props.type}
      onClick={props.onClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : '',
        props.block ? `${classPrefix}-block` : '',
        props.size ? `${classPrefix}-${props.size}` : '',
        props.disabled ? `${classPrefix}-disabled` : '',
      )}
      disabled={props.disabled}
    >
      {props.children}
    </button>,
  );
};
