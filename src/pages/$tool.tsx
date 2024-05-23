import { useParams } from 'umi';

import * as ToolsComponents from '@/tools';
import { PageComponent } from '@/components/PageWrap';
import { toCamelCase } from '@/utils';

export default () => {
  const { tool } = useParams<{ tool: string }>();
  const toolComponentName = toCamelCase(tool);
  const Component =
    ToolsComponents?.[toolComponentName as keyof typeof ToolsComponents];
  if (!Component) return <>404</>;

  return (
    <PageComponent title={Component.title} description={Component.description}>
      {Component()}
    </PageComponent>
  );
};
