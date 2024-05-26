import { SearchOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import { useRef, useState } from 'react';

import Styles from './index.css';

const Search = () => {
  const inputRef = useRef(null);
  const [keywords, setKeywords] = useState<string>('');

  return (
    <div className={Styles['tools-search-bar']}>
      <SearchOutlined className={Styles['tools-search-bar-icon']} />
      <Input
        classNames={Styles['tools-search-bar-input']}
        onFocus={() => {}}
        onMouseEnter={() => {}}
        onBlur={() => {}}
        // onChange={(keywords) => setKeywords(keywords)}
        ref={inputRef}
      />

      <Modal></Modal>
    </div>
  );
};

export default Search;
