import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

import { ToolsModule } from '@/types';
import './index.css';

export interface ToolComponentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * 页面布局和面包屑，回到上一层等等基本能力
 */
export const ToolComponent = (props: ToolComponentProps) => {
  const { title, description, children } = props;
  const [isCollected, setIsCollected] = useState<boolean>(false);
  return (
    <section className="tools-wrap">
      <div className="tools-breadcrumb"></div>
      <div className="tools-component">
        <div className="tools-component-header">
          <h2 className="tools-title">{title}</h2>
          <Button
            className="tools-collection"
            icon={
              isCollected ? (
                <StarFilled style={{ color: '#F7CE09' }} />
              ) : (
                <StarOutlined />
              )
            }
          >
            收藏
          </Button>
        </div>

        <p className="tools-desc"> {description} </p>
        <div className="tools-container">{children}</div>
      </div>
    </section>
  );
};

export type ToolWrapOptions = Omit<ToolsModule, 'component'>;

export default function ToolModule(
  component: React.FC<any>,
  options: ToolWrapOptions,
): ToolsModule {
  return {
    component,
    ...options,
  };
}
