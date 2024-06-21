import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import { useCollection } from "@/hooks";
import { TOOLS_KEY_ENUM } from "@/types";
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
export const ToolComponent = (props: ToolComponentProps) => {
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

const ToolModule =
  // eslint-disable-next-line react/display-name
  (module: React.FC<any>, moduleName: TOOLS_KEY_ENUM) => () => {
    const config = ToolsModuleConfig[moduleName];
    return (
      <ToolComponent
        title={config?.title}
        moduleKey={config?.key}
        description={config?.description}
      >
        {React.createElement(module)}
      </ToolComponent>
    );
  };

export default ToolModule;
