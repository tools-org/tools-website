import { useEffect, useState } from 'react';

import { ToolsModule } from '@/types';
import useToolsModules from './useToolsModules';

const useSearch = () => {
  const ToolsModules = useToolsModules();
  const [keywords, setKeywords] = useState('');
  const [result, setResult] = useState<Array<ToolsModule>>([]);

  useEffect(() => {
    if (keywords) {
      setResult(
        ToolsModules.filter((module) => {
          return (
            module.title.includes(keywords) ||
            module.description.includes(keywords) ||
            module.keywords.includes(keywords)
          );
        }),
      );
    } else {
      setResult([]);
    }
  }, [keywords]);

  return {
    keywords,
    setKeywords,
    result,
  };
};

export default useSearch;
