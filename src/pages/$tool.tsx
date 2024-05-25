import { useParams } from 'umi';

import { ToolComponent } from '@/components/ToolModule';
import { useToolsModules } from '@/hooks';
import { useMemo } from 'react';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const ToolsModules = useToolsModules();

  const ToolsModule = ToolsModules.find((module) => module.path === tool);
  if (!ToolsModule) return <>404</>;

  const component = useMemo(() => {
    return (
      <ToolComponent
        title={ToolsModule.title}
        description={ToolsModule.description}
      >
        <ToolsModule.component />
      </ToolComponent>
    );
  }, [tool]);

  return component;
};
