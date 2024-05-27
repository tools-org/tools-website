import { ToolsModule } from '@/types';

interface ResultProps {
  data: Array<ToolsModule>;
}
const Result = (props: ResultProps) => {
  const { data } = props;
  return (
    <div className="tools-search-result">
      {data.map((module) => {
        return <div className="tools-search-result-item">{module.title}</div>;
      })}
    </div>
  );
};

export default Result;
