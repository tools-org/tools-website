import { useParams } from 'umi';

import { ToolComponent } from '@/components/ToolWrap';
import * as ToolsModules from '@/tools';
import { toCamelCase } from '@/utils';
import { useMemo } from 'react';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const toolComponentName = toCamelCase(tool as string);
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
