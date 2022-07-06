import React, { useMemo } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { defaultConfig } from '../ConfigProvider/ConfigContext';

export interface IconProps {
  type: string;
  spin?: boolean;
  prefix?: string;
  className: string;
}

// const IconWrap = styleWrap<{spin?: boolean}>({})(
// styled('i')()
// )

const Icon = ({ type, spin, prefix, className, ...rest }: IconProps) => {
  const finalPrefix = useMemo(
    () => prefix || defaultConfig.iconDefaultPrefix || 'icon-',
    [defaultConfig.iconDefaultPrefix, prefix],
  );
  return (
    <i
      className={classNames(`${finalPrefix}${type}`, spin && `${prefixCls}-spin`, 'iconfont')}
      {...rest}
    ></i>
  );
};

export default React.memo(Icon);
