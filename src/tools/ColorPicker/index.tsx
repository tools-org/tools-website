"use client";
import { FormOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Fragment, useState } from "react";
import * as color from "react-color/es/helpers/color";

import Empty from "@/components/Empty";
import ToolModule from "@/components/ToolModule";
import { useStore } from "@/hooks";
import { TOOLS_KEY_ENUM } from "@/types";
import { generateDateUUID, isEmpty } from "@/utils";
import "./index.css";
import Picker from "./Picker";
import ColorRecord, { IRecord } from "./Record";

const ColorPicker = () => {
  const { storeData, setStoreData } = useStore(TOOLS_KEY_ENUM.ColorPicker);
  const [data, setData] = useState(color.toState(storeData.value, 0));

  const handleColorChange = (data: Record<string, any>) => {
    const colorData = color.toState(data, data.h);
    setData(colorData);
    setStoreData({
      value: colorData.hex,
    });
  };

  const handleColorRecordChange = (data: Array<IRecord>) => {
    setStoreData({ collection: data });
  };

  const handleRecord = () => {
    setStoreData({
      collection: [
        ...(storeData.collection || []),
        {
          key: generateDateUUID(),
          title: data.hex,
          value: data.hex,
        },
      ],
    });
  };

  const handleSelect = (hex: string) => {
    setData(color.toState(hex, 0));
  };

  return (
    <Fragment>
      {/* 颜色选择 */}
      <Picker color={data} onChange={handleColorChange} />
      {/* 颜色记录 */}
      <Button type="primary" onClick={handleRecord}>
        <FormOutlined />
        记录一下
      </Button>

      {isEmpty(storeData?.collection) ? (
        <Empty description={"暂无记录数据"} />
      ) : (
        <ColorRecord
          data={storeData.collection}
          onChange={handleColorRecordChange}
          onSelect={handleSelect}
        />
      )}
    </Fragment>
  );
};

export default ToolModule(ColorPicker, TOOLS_KEY_ENUM.ColorPicker);
