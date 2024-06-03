import { useParams } from 'umi';

import { ToolComponent } from '@/components/ToolModule';
import { useToolsModules } from '@/hooks';
import React, { useMemo } from 'react';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const ToolsModules = useToolsModules();

  const ToolsModule = ToolsModules.find((module) => module.path === tool);
  if (!ToolsModule) return <>404</>;

  const component = useMemo(() => {
    const ToolsModuleComponent = ToolsModule.component as React.FC<any>;
    return (
      <ToolComponent
        moduleKey={ToolsModule.key}
        title={ToolsModule.title}
        description={ToolsModule.description}
      >
        <ToolsModuleComponent />
      </ToolComponent>
    );
  }, [tool]);

  return component;
};
