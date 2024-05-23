import { css, cx } from '@emotion/css';
import { useEffect, useRef, useState } from 'react';

import Copy from '@/components/Copy';
import './index.less';

let idCounter = 1;

interface IProps {
  label: string;
  labelPosition?: 'left' | 'center' | 'right';
  value: any;
  onChange: (val: any, e: any) => void;
}

const EditableInput = (porps: IProps) => {
  const { value, label, labelPosition = 'center', onChange } = porps;
  const inputRef = useRef(null);
  const [blurValue, setBlurValue] = useState<any>(String(value).toUpperCase());
  const [currentValue, setCurrentValue] = useState(String(value).toUpperCase());
  const inputId = `rc-editable-input-${idCounter++}`;

  const handleKeyDown = () => {};

  const setUpdatedValue = (val: any, e: any) => {
    onChange({ [label.toLowerCase()]: val }, e);
    setCurrentValue(val);
  };

  const handleChange = (e: any) => {
    setUpdatedValue(e.target.value, e);
  };

  const handleBlur = () => {
    if (blurValue) {
      setBlurValue(null);
      setCurrentValue(blurValue);
    }
  };

  useEffect(() => {
    if (inputRef.current === document.activeElement) {
      setBlurValue(String(value).toUpperCase());
    } else {
      if (!blurValue) setBlurValue(String(value).toUpperCase());
      setCurrentValue(String(value).toUpperCase());
    }
  }, [value]);

  return (
    <div className={'editable-input-wrap'}>
      <input
        className={'editable-input-input'}
        ref={inputRef}
        id={inputId}
        value={currentValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {label ? (
        <label
          className={cx(
            'editable-input-label',
            `editable-input-label-${labelPosition}`,
          )}
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}

      <div className={css(`position:absolute;right:10px;top:10px;`)}>
        <Copy value={currentValue} />
      </div>
    </div>
  );
};

export default EditableInput;
