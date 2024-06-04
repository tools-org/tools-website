import { FormOutlined } from '@ant-design/icons';
import { ColorOutlined } from '@fett/icons';
import { Button } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import * as color from 'react-color/es/helpers/color';

// import Empty from '@/components/Empty';
// import { PRIMARY_COLOR } from '@/constants';
import { useStore } from '@/hooks';
// import { generateDateUUID, isEmpty } from '@/utils';
import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM, TOOLS_KEY_ENUM } from '@/types';
import './index.css';
import Picker from './Picker';
// import ColorRecord, { IRecord } from './Record';

const ColorPicker = () => {
  const { getStoreData, setStoreData } = useStore(TOOLS_KEY_ENUM.ColorPicker);
  // const { loading, data: localData, setData: setLocalData } = useLocalData();
  const [data, setData] = useState(color.toState(getStoreData().value, 0));

  const handleColorChange = (data: Record<string, any>) => {
    const colors = color.toState(data, data.h);
    setData(colors);
  };

  // const handleColorRecordChange = (data: Array<IRecord>) => {
  //   setLocalData({ color: data });
  // };

  const handleRecord = () => {
    // setLocalData({
    //   color: [
    //     ...(localData.color || []),
    //     {
    //       value: data.hex,
    //       title: data.hex,
    //       key: generateDateUUID(),
    //     },
    //   ],
    // });
  };

  // const handleSelect = (hex: string) => {
  //   setData(color.toState(hex, 0));
  // };

  useEffect(() => {
    // setData(color.toState(getStoreData().value, 0));

    return () => {
      setStoreData({
        value: data.hex,
      });
    };
  }, [data]);

  return (
    <Fragment>
      {/* 颜色选择 */}
      <Picker color={data} onChange={handleColorChange} />
      {/* 颜色记录 */}
      <Button type="primary" onClick={handleRecord}>
        <FormOutlined />
        记录一下
      </Button>

      {/* {loading || isEmpty(localData?.color) ? (
        <Empty description={'暂无记录数据'} />
      ) : (
        <ColorRecord
          data={localData?.color}
          onChange={handleColorRecordChange}
          onSelect={handleSelect}
        />
      )} */}
    </Fragment>
  );
};

export default ToolModule(ColorPicker, {
  key: 'ColorPicker',
  title: '颜色选择器',
  description: '颜色选择、颜色转换等',
  path: 'color-picker',
  icon: <ColorOutlined />,
  keywords: ['color', '颜色'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
