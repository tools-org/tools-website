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
  JsonOutlined,
  SaveOutlined,
} from '@fett/icons';
import { Tooltip } from 'antd';
import jsonlint from 'jsonlint-mod';
import { useEffect, useMemo, useState } from 'react';

import ActionsBarWrap from '@/components/ActionsBarWrap';
import Copy from '@/components/Copy';
import { JsonEditor } from '@/components/Editor';
import ToolModule from '@/components/ToolModule';
import { useWindowSize } from '@/hooks';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import { isEmpty } from '@/utils';
import './index.less';

const Json = (props: any) => {
  const [value, setValue] = useState('');
  const [parseJson, setParseJson] = useState({});
  const [parseError, setParseError] = useState<string | null>(null);
  const { height } = useWindowSize();
  const editorHeight = useMemo(() => height - 250, [height]); // 编辑器高度

  // json 格式化
  const handleJsonFormat = () => {
    if (isEmpty(parseError)) {
      setValue(JSON.stringify(parseJson, null, 2));
    }
  };

  const handleCompress = () => {
    if (isEmpty(parseError)) {
      setValue(JSON.stringify(parseJson));
    }
  };

  // 清除
  const handleClear = () => {
    setValue('');
  };

  // 保存
  const handleSave = () => {
    // Events.saveFileToLocal({ fileName: 'Untitled.json', payload: value });
  };

  // 导入文件
  const handleImport = async () => {
    // const { fileValue } = await Events.getFileFromLocalPath({
    //   filters: [{ name: 'json文件', extensions: ['*.json'] }],
    // });
    // if (fileValue) setValue(fileValue);
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
    handleJsonParse(value);
  }, [value]);

  return (
    <div className={'tools-json-parse'}>
      <div className={'tools-json-panel'}>
        <ActionsBarWrap>
          <Copy value={value} />
          <Tooltip placement="bottom" title="美化">
            <ClearOutlined />
          </Tooltip>
          <Tooltip placement="bottom" title="压缩">
            <CompressOutlined />
          </Tooltip>
          <Tooltip placement="bottom" title="保存">
            <SaveOutlined />
          </Tooltip>
          <Tooltip placement="bottom" title="导入">
            <ExportOutlined />
          </Tooltip>
          <Tooltip placement="bottom" title="清除">
            <DeleteOutlined />
          </Tooltip>
        </ActionsBarWrap>

        <JsonEditor
          error={parseError}
          onErrorClose={() => setParseError(null)}
          style={{ height: editorHeight }}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default ToolModule(Json, {
  key: 'Json',
  title: 'JSON 编辑器',
  description: 'JSON 编辑、格式化、查看等能力',
  path: 'json',
  icon: <JsonOutlined />,
  keywords: ['json'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
