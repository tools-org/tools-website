import React from 'react';
import { TOOLS_CATEGORY_ENUM } from '@/constants';

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
    <section className="tool-wrap">
      <div className="tool-breadcrumb"></div>
      <div className="tool-component">
        <h2 className="tool-title">{title} </h2>
        <p className="tool-desc"> {description} </p>
        <div className="tool-container">{children}</div>
      </div>
    </section>
  );
};

export interface ToolWrapOptions {
  title: string;
  description: string;
  keywords: Array<string>;
  category: TOOLS_CATEGORY_ENUM;
  path: string;
  icon: React.ReactNode;
}

export default function ToolWrap(
  component: React.FC<any>,
  options: ToolWrapOptions,
) {
  return {
    component,
    ...options,
  };
}
