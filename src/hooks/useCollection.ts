import { useMemo, useState, useEffect } from "react";

const TOOLS_WEBSITE_COLLECTIONS = "__TOOLS_WEBSITE_COLLECTIONS__";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;
const useCollection = (key: string) => {
  const [collections, setCollections] = useState<Array<string>>([]);

  const isCollected = useMemo(
    () => collections.includes(key),
    [key, collections]
  );

  const onCollection = () => {
    let fixedCollections;
    if (collections.includes(key)) {
      fixedCollections = collections.filter((v) => v !== key);
    } else {
      fixedCollections = [...collections, key];
    }
    setCollections(fixedCollections);
    localStorage?.setItem(
      TOOLS_WEBSITE_COLLECTIONS,
      JSON.stringify(fixedCollections)
    );
  };

  useEffect(() => {
    setCollections(
      JSON.parse(localStorage?.getItem?.(TOOLS_WEBSITE_COLLECTIONS) || "[]")
    );
  }, []);

  return {
    isCollected,
    collections,
    onCollection,
  };
};

export default useCollection;
