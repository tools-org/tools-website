"use client";
import { WebsiteOutlined } from "@fett/icons";
import { Descriptions, Input, Button } from "antd";
import { useEffect, useMemo, useState } from "react";

import { TOOLS_KEY_ENUM } from "@/types";
import { isEmpty } from "@/utils";
import { URL_PARAMS } from "./constants";
import "./index.css";
import { urlConverToObject } from "./utils";
import ToolModule from "@/components/ToolModule";
import Item from "./Item";

const Search = Input.Search;

const UrlParse = () => {
  const [url, setUrl] = useState<string>("");
  const [isFail, setIsFail] = useState<boolean>(false);
  const [urlInstance, setUrlInstance] = useState<any>(null);
  const urlParseData = useMemo(
    () => urlConverToObject(urlInstance),
    [urlInstance]
  );

  const handleUrlParse = () => {
    if (!isEmpty(url)) {
      try {
        setUrlInstance(new URL(url));
        setIsFail(false);
      } catch (err) {
        setIsFail(true);
      }
    } else {
      setUrlInstance(null);
    }
  };

  const handleUrlChange = (e: any) => {
    const value = e.target.value;
    setUrl(value);
  };

  useEffect(() => {
    handleUrlParse();
  }, [url]);

  return (
    <div className="tools-components-url">
      <Search
        allowClear
        placeholder="在这里输入网址..."
        status={isFail ? "error" : ""}
        enterButton={
          <Button style={{ width: 100 }} type="primary">
            解析
          </Button>
        }
        size="large"
        addonBefore={<WebsiteOutlined />}
        onChange={handleUrlChange}
        onSearch={handleUrlParse}
        onPressEnter={handleUrlParse}
      />
      <div className="tools-components-url-parse">
        {!isEmpty(Object.keys(urlParseData)) ? (
          <Descriptions bordered column={1}>
            {Object.keys(urlParseData).map((key) => {
              const value = urlParseData[key];
              if (key === "searchParams") {
                if (!isEmpty(value)) {
                  return (
                    <Descriptions.Item
                      key={key}
                      label={key}
                      labelStyle={{ width: 140 }}
                    >
                      <Descriptions bordered column={1}>
                        {Object.keys(value).map((k) => {
                          return (
                            <Descriptions.Item
                              key={k}
                              label={k}
                              labelStyle={{ width: 140 }}
                            >
                              <Item value={value[k]} />
                            </Descriptions.Item>
                          );
                        })}
                      </Descriptions>
                    </Descriptions.Item>
                  );
                } else {
                  return [];
                }
              } else {
                return (
                  <Descriptions.Item
                    key={key}
                    label={key}
                    labelStyle={{ width: 140 }}
                  >
                    <Item value={value} />
                  </Descriptions.Item>
                );
              }
            })}
          </Descriptions>
        ) : (
          <div>
            <Descriptions bordered column={1}>
              {URL_PARAMS.map((item) => {
                return (
                  <Descriptions.Item
                    key={item.key}
                    label={item.key}
                    labelStyle={{ width: 140 }}
                  >
                    {item.description}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolModule(UrlParse, TOOLS_KEY_ENUM.UrlParse);
