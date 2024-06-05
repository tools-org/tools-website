import { ToolsModule } from '@/types';
import { Link } from 'umi';

interface ResultProps {
  data: Array<ToolsModule>;
  onItemSelect: () => void;
}
const Result = (props: ResultProps) => {
  const { data, onItemSelect } = props;
  return (
    <div className="tools-search-result">
      {data.map((module) => {
        return (
          <Link
            className="tools-search-result-item"
            key={module.key}
            to={`/tools/${module.path}`}
            onClick={onItemSelect}
          >
            {module.icon}
            {module.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Result;
