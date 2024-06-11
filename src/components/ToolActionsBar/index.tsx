import cx from 'clsx';
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
          {children.map((item, index) => {
            return (
              <div className="tools-actions-bar-item" key={index}>
                {item}
              </div>
            );
          })}
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default memo(ToolActionsBar);
