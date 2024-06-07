import { cx } from '@emotion/css';
import React, { memo } from 'react';

import './index.css';

interface IActionsBarProps {
  className?: string;
  children: React.ReactNode;
  palcement?: 'left' | 'right';
}

const ToolActionsBar = (props: IActionsBarProps) => {
  const { children, className = '', palcement = 'left' } = props;

  return (
    <div
      className={cx('tools-actions-bar', className)}
      style={{ justifyContent: palcement }}
    >
      {Array.isArray(children) ? (
        <>
          {children.map((item) => {
            return <div className="tools-actions-bar-item">{item}</div>;
          })}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default memo(ToolActionsBar);
