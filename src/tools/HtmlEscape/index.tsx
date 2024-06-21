"use client";

import { Button, Input, Space, Tooltip } from "antd";
import { Fragment, useState } from "react";

import ActionsBarWrap from "@/components/ActionsBarWrap";
import Copy from "@/components/Copy";
import ToolModule from "@/components/ToolModule";
import { TOOLS_KEY_ENUM } from "@/types";
// import Icon from '@/components/Icon';

const TextArea = Input.TextArea;

const HtmlEscape = () => {
  const [escapeValue, setEscapeValue] = useState<string>("");
  const [unEscapeValue, setUnEscapeValue] = useState<string>("");

  const handleEscape = () => {
    const res = encodeURIComponent(unEscapeValue);
    setEscapeValue(res);
  };

  const handleUnEscape = () => {
    const res = decodeURIComponent(escapeValue);
    setUnEscapeValue(res);
  };

  return (
    <Fragment>
      <ActionsBarWrap palcement="right">
        <Copy value={unEscapeValue} size={18} />
        <Tooltip placement="bottom" title="清除">
          {/* <Icon type="icon-shanchu" size={18} onClick={() => setEscapeValue('')} /> */}
        </Tooltip>
      </ActionsBarWrap>
      <TextArea
        spellCheck={false}
        rows={12}
        placeholder="请输入待编码内容"
        value={unEscapeValue}
        onChange={(e) => setEscapeValue(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Space style={{ margin: "12px 0" }}>
          <Button type="primary" onClick={handleEscape}>
            编码
          </Button>
          <Button type="primary" onClick={handleUnEscape}>
            解码
          </Button>
        </Space>
        <ActionsBarWrap palcement="right">
          <Copy value={escapeValue} size={18} />
          <Tooltip placement="bottom" title="清除">
            {/* <Icon
              type="icon-shanchu"
              size={18}
              onClick={() => setEscapeValue('')}
            /> */}
          </Tooltip>
        </ActionsBarWrap>
      </div>

      <TextArea
        spellCheck={false}
        rows={12}
        placeholder="请输入待解码内容"
        value={escapeValue}
        onChange={(e) => setEscapeValue(e.target.value)}
      />
    </Fragment>
  );
};

export default ToolModule(HtmlEscape, TOOLS_KEY_ENUM.HtmlEscape);
