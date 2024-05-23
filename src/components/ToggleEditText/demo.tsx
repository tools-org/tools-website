import { useState } from 'react';
import { ToggleEditText } from '../../index';

export default () => {
  const [value, setValue] = useState('');

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  return (
    <ToggleEditText
      value={value}
      defaultValue=""
      onChange={handleValueChange}
      placeholder="请输入"
      style={{ height: 22, width: 200 }}
    />
  );
};
