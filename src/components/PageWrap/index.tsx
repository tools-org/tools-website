import React from 'react';

/**
 * 页面布局和面包屑，回到上一层等等基本能力
 */
export interface PageWrapProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const PageComponent = (props: PageWrapProps) => {
  const { title, description, children } = props;
  return (
    <section className="tool-page-wrap">
      <div className="tool-page-breadcrumb"></div>
      <div className="tool-page-component">
        <h2 className="tool-page-title">{title} </h2>
        <p className="tool-page-desc"> {description} </p>
        <div className="tool-page-container">{children}</div>
      </div>
    </section>
  );
};

export default function PageWrap(props: PageWrapProps) {
  const { children, ...resetProps } = props;
  return <PageComponent {...resetProps}> {children}</PageComponent>;
}
