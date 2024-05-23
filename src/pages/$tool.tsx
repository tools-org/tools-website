import { useParams } from 'umi';

import * as ToolsModules from '@/tools';
import { ToolComponent } from '@/components/ToolWrap';
import { toCamelCase } from '@/utils';
import { useMemo } from 'react';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const toolComponentName = toCamelCase(tool);
  const toolModule =
    ToolsModules?.[toolComponentName as keyof typeof ToolsModules];
  console.log('ToolsModules', ToolsModules);
  if (!toolModule) return <>404</>;

  const component = useMemo(() => {
    return (
      <ToolComponent
        title={toolModule.title}
        description={toolModule.description}
      >
        <toolModule.component />
      </ToolComponent>
    );
  }, [tool]);

  return component;
};
