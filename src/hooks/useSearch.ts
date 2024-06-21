import { useEffect, useState } from "react";

import { ToolsModule } from "@/types";
import { moduleConfig } from "@/components/ToolModule/config";

const useSearch = () => {
  const moduleConfigList = Object.values(moduleConfig);
  const [keywords, setKeywords] = useState("");
  const [result, setResult] = useState<Array<ToolsModule>>(
    []
  );

  useEffect(() => {
    if (keywords) {
      setResult(
        moduleConfigList.filter((config) => {
          const lowerKeywords = keywords.toLowerCase();
          return (
            config.title.toLowerCase().includes(lowerKeywords) ||
            config.description.toLowerCase().includes(lowerKeywords) ||
            config.keywords.some((key) => key.includes(lowerKeywords))
          );
        })
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
