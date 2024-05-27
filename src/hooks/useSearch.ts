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
          const lowerKeywords = keywords.toLowerCase();
          return (
            module.title.toLowerCase().includes(lowerKeywords) ||
            module.description.toLowerCase().includes(lowerKeywords) ||
            module.keywords.some((key) => key.includes(lowerKeywords))
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
