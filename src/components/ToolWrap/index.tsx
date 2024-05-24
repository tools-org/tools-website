import { ToolsModule } from '@/types';
import React from 'react';

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
  return (
    <section className="tools-wrap">
      <div className="tools-breadcrumb"></div>
      <div className="tools-component">
        <h2 className="tools-title">{title} </h2>
        <p className="tools-desc"> {description} </p>
        <div className="tools-container">{children}</div>
      </div>
    </section>
  );
};

export type ToolWrapOptions = Omit<ToolsModule, 'component'>;

export default function ToolWrap(
  component: React.ReactNode,
  options: ToolWrapOptions,
): ToolsModule {
  return {
    component,
    ...options,
  };
}
