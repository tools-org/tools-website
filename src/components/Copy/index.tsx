import { CheckOutLined, CopyOutlined } from "@fett/icons";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface IProps {
  value: string;
  size?: number;
}

const CopyComponent = (props: IProps) => {
  const { value, size = 20 } = props;
  const timer = useRef<any>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    timer.current = setTimeout(() => {
      setCopied(false);
      clearTimeout(timer.current);
      timer.current = null;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, []);

  return (
    <CopyToClipboard text={value} onCopy={handleCopy}>
      <Tooltip placement="bottom" title="复制">
        {copied ? (
          <CheckOutLined
            style={{
              color: "#52c41a",
              fontSize: `${size}px`,
              cursor: "pointer",
            }}
          />
        ) : (
          <CopyOutlined style={{ fontSize: `${size}px`, cursor: "pointer" }} />
        )}
      </Tooltip>
    </CopyToClipboard>
  );
};

export default CopyComponent;
