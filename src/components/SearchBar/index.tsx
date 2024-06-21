"use client";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EnterOutlined,
} from '@ant-design/icons';
import { SearchOutlined } from '@fett/icons';
import { Fragment, useEffect, useRef, useState, type FC } from 'react';

import { useSearch } from '@/hooks';
import './index.css';
import { Input } from './Input';
import { Mask } from './Mask';
import Result from './Result';
export { Input as SearchInput } from './Input';
export { Mask as SearchMask } from './Mask';

const isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(
  typeof navigator !== 'undefined' ? navigator?.platform : '',
);

/** Determine if the element that triggered the event is an input element */
const isInput = (target: HTMLElement) =>
  ['TEXTAREA', 'INPUT'].includes(target.tagName) ||
  target.contentEditable === 'true';

const SearchBar: FC = () => {
  const modalInputRef = useRef<HTMLInputElement>(null);
  const [symbol, setSymbol] = useState('⌘');
  const { setKeywords, result } = useSearch();
  const [modalVisible, setModalVisible] = useState(false);

  const handler = (ev: KeyboardEvent) => {
    if (
      ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k') ||
      (ev.key === '/' && !isInput(ev.target as HTMLElement))
    ) {
      ev.preventDefault();
      setKeywords('');
      setModalVisible(true);
      setTimeout(() => {
        modalInputRef.current?.focus();
      });
    }

    if (ev.key === 'Escape') {
      ev.preventDefault();
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (!isAppleDevice) {
      setSymbol('Ctrl');
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <Fragment>
      <div
        className="tools-search-bar"
        onClick={() => {
          setModalVisible(true);
          setTimeout(() => {
            modalInputRef.current?.focus();
          });
        }}
      >
        <SearchOutlined className="tools-search-bar-svg" />
        <span className="tools-search-bar-placeholder"> 输入关键词搜索...</span>
        <span className="tools-search-shortcut">{symbol} K</span>
      </div>
      <Mask
        visible={modalVisible}
        onMaskClick={() => {
          setModalVisible(false);
        }}
        onClose={() => setKeywords('')}
      >
        <div style={{ position: 'relative' }}>
          <Input
            onChange={(keywords) => setKeywords(keywords)}
            ref={modalInputRef}
          />
        </div>

        <Result
          data={result}
          onItemSelect={() => {
            setModalVisible(false);
          }}
        />

        <footer>
          <ul className="tools-search-modal-commands">
            <li className="tools-search-modal-commands-arrow">
              <span className="tools-search-modal-shortcut">
                <EnterOutlined />
              </span>

              <span className="tools-search-modal-commands-text">
                to select
              </span>
            </li>
            <li className="tools-search-modal-commands-arrow">
              <span className="tools-search-modal-shortcut">
                <ArrowUpOutlined />
              </span>
              <span className="tools-search-modal-shortcut">
                <ArrowDownOutlined />
              </span>
              <span className="tools-search-modal-commands-text">
                to navigate
              </span>
            </li>
            <li>
              <span className="tools-search-modal-shortcut">esc</span>
              <span className="tools-search-modal-commands-text">to close</span>
            </li>
          </ul>
        </footer>
      </Mask>
    </Fragment>
  );
};

export default SearchBar;
