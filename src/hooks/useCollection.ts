import { useMemo, useState } from 'react';

const TOOLS_WEBSITE_COLLECTIONS = '__TOOLS_WEBSITE_COLLECTIONS__';

const useCollection = (key: string) => {
  const STORE_DATA = JSON.parse(
    localStorage.getItem(TOOLS_WEBSITE_COLLECTIONS) || '[]',
  );
  const [collections, setCollections] = useState<Array<string>>(STORE_DATA);

  const isCollected = useMemo(
    () => collections.includes(key),
    [key, collections],
  );

  const onCollection = () => {
    let fixedCollections;
    if (collections.includes(key)) {
      fixedCollections = collections.filter((v) => v !== key);
    } else {
      fixedCollections = [...collections, key];
    }
    setCollections(fixedCollections);
    localStorage.setItem(
      TOOLS_WEBSITE_COLLECTIONS,
      JSON.stringify(fixedCollections),
    );
  };

  return {
    isCollected,
    collections,
    onCollection,
  };
};

export default useCollection;
