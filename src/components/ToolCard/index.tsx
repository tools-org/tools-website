'use client';

import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useEffect } from 'react';
import Link from 'next/link'

import { useCollection } from '@/hooks';
import './index.css';

export interface ToolCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  moduleKey: string;
}
const ToolCard = (props: ToolCardProps) => {
  const { title, description, path, icon, moduleKey } = props;
  const { isCollected, onCollection } = useCollection(moduleKey);

  const handleCollected = (e: MouseEvent) => {
    e.preventDefault();
    onCollection();
  };

  useEffect(()=>{
    
  })

  return (
    <Link href={path}>
      <Card className="tools-card" hoverable>
        <h3 className="tools-card-header">
          <span className="tools-card-title">
            {icon}
            {title}
          </span>
          {isCollected ? (
            <StarFilled
              style={{ color: '#F7CE09' }}
              onClick={handleCollected as any}
            />
          ) : (
            <StarOutlined onClick={handleCollected as any} />
          )}
        </h3>
        <p className="tools-card-desc">{description}</p>
      </Card>
    </Link>
  );
};

export default ToolCard;
