import { useParams } from 'umi';

import { ToolComponent } from '@/components/ToolWrap';
import * as ToolsModules from '@/tools';
import { toCamelCase } from '@/utils';
import { useMemo } from 'react';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const toolComponentName = toCamelCase(tool as string);
  const ToolsModule =
    ToolsModules?.[toolComponentName as keyof typeof ToolsModules];

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
