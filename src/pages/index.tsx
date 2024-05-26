import { Col, Row } from 'antd';

import ToolCard from '@/components/ToolCard';
import { useToolsModules } from '@/hooks';

export default function IndexPage() {
  const ToolsModules = useToolsModules();
  return (
    <div>
      主页
      <Row>
        {ToolsModules.map((module) => {
          return (
            <Col key={module.key} span={6}>
              <ToolCard
                title={module.title}
                description={module.description}
                path={`tools/${module.path}`}
                icon={module.icon}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
