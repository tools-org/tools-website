import React from 'react';
import Link from '@/components/Link';

export interface ToolCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}
const ToolCard = (props: ToolCardProps) => {
  const { title, description, path, icon } = props;

  return (
    <Link to={path}>
      <div className="tools-item-card">
        <h3>
          {icon}
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;
