"use client";
/**
 * 1、json 格式化
 * 2、json 解析
 * 3、json 复制
 * 4、显示行号（样式处理）
 * 5、下载成json文件
 * 6、支持 json5
 * 7、支持转成json
 */
import {
  ClearOutlined,
  CompressOutlined,
  DeleteOutlined,
  ExportOutlined,
  SaveOutlined,
} from "@fett/icons";
import { Popover, Tooltip } from "antd";
import jsonlint from "jsonlint-mod";
import { useEffect, useState } from "react";

import Copy from "@/components/Copy";
import { JsonEditor } from "@/components/Editor";
import FilePicker from "@/components/FilePicker";
import ToolActionsBar from "@/components/ToolActionsBar";
import ToolModule from "@/components/ToolModule";
import { useStore } from "@/hooks";
import { TOOLS_KEY_ENUM } from "@/types";
import { isEmpty } from "@/utils";
import "./index.css";

const Json = () => {
  const { storeData, setStoreData } = useStore(TOOLS_KEY_ENUM.Json);
  const [parseJson, setParseJson] = useState({});
  const [parseError, setParseError] = useState<string | null>(null);

  // json 格式化
  const handleJsonFormat = () => {
    if (isEmpty(parseError)) {
      setStoreData({ value: JSON.stringify(parseJson, null, 2) });
    }
  };

  const handleCompress = () => {
    if (isEmpty(parseError)) {
      setStoreData({ value: JSON.stringify(parseJson) });
    }
  };

  // 清除
  const handleClear = () => {
    setStoreData({ value: "" });
  };

  // 保存
  const handleSave = () => {
    // Events.saveFileToLocal({ fileName: 'Untitled.json', payload: value });
  };

  // 导入文件
  const handleImport = (fileValue: string) => {
    setStoreData({ value: fileValue });
  };

  const handleValueChange = (value: string) => {
    setStoreData({ value });
  };

  // json 解析
  const handleJsonParse = (value: string) => {
    if (!isEmpty(value)) {
      try {
        const data = jsonlint.parse(value);
        setParseJson(data);
        setParseError(null);
      } catch (err: any) {
        setParseError(err.message);
      }
    } else {
      setParseError(null);
    }
  };

  useEffect(() => {
    handleJsonParse(storeData.value);
  }, [storeData.value]);

  return (
    <div className={"tools-json-parse"}>
      <div className={"tools-json-panel"}>
        <ToolActionsBar>
          <Copy value={storeData.value} size={16} />
          <Tooltip placement="top" title="美化">
            <ClearOutlined onClick={handleJsonFormat} />
          </Tooltip>
          <Tooltip placement="top" title="压缩">
            <CompressOutlined onClick={handleCompress} />
          </Tooltip>
          <Tooltip placement="top" title="保存">
            <SaveOutlined />
          </Tooltip>
          <Popover
            title={null}
            placement="bottom"
            trigger="click"
            content={
              <div>
                <FilePicker accept={".json"} onLoad={handleImport} />
              </div>
            }
          >
            <Tooltip placement="top" title="导入">
              <ExportOutlined />
            </Tooltip>
          </Popover>
          <Tooltip placement="top" title="清除">
            <DeleteOutlined onClick={handleClear} />
          </Tooltip>
        </ToolActionsBar>

        <JsonEditor
          error={parseError}
          onErrorClose={() => setParseError(null)}
          style={{ height: "calc(100vh - 250px)" }}
          value={storeData.value}
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default ToolModule(Json, TOOLS_KEY_ENUM.Json);
