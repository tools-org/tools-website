"use client";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect } from "react";

import { useCollection } from "@/hooks";
import { ToolsModule, TOOLS_KEY_ENUM } from "@/types";
import { moduleConfig } from "./config";
import "./index.css";

export const ToolsModuleConfig = moduleConfig;
export interface ToolComponentProps {
  moduleKey: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * 页面布局和面包屑，回到上一层等等基本能力
 */
const ToolComponent = (props: ToolComponentProps) => {
  const { title, description, children, moduleKey } = props;

  const { isCollected, onCollection } = useCollection(moduleKey);

  const handleCollected = (e: MouseEvent) => {
    e.preventDefault();
    onCollection();
  };

  return (
    <section>
      <div className="tools-breadcrumb"></div>
      <div className="tools-module">
        <div className="tools-module-header">
          <h2 className="tools-module-title">{title}</h2>
          <Button
            className="tools-module-collection"
            onClick={handleCollected as any}
            icon={
              isCollected ? (
                <StarFilled style={{ color: "#F7CE09" }} />
              ) : (
                <StarOutlined />
              )
            }
          >
            收藏
          </Button>
        </div>

        <p className="tools-module-desc"> {description} </p>
        <div className="tools-module-container">{children}</div>
      </div>
    </section>
  );
};

export default ToolComponent;
