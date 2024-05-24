import { DiffOutlined } from '@fett/icons';
import { Select } from 'antd';
import { Fragment, useMemo, useState } from 'react';

import {
  BaseDiffEditor,
  EDITOR_LANGUAGE_OPTIONS,
  EEditorLanguage,
} from '@/components/Editor';
import ToolWrap from '@/components/ToolWrap';
import { useWindowSize } from '@/hooks';
import { TOOLS_CATEGORY_ENUM } from '@/types';

const Diff = () => {
  const [language, setLanguage] = useState<EEditorLanguage>(
    EEditorLanguage.PLAINTEXT,
  );
  const { height } = useWindowSize();
  const editorHeight = useMemo(() => height - 250, [height]); // 编辑器高度

  return (
    <Fragment>
      <div style={{ height: 36 }}>
        <span style={{ fontWeight: 500, fontSize: 14 }}>语言：</span>
        <Select
          style={{ width: 140, padding: '2px 0' }}
          showSearch
          value={language}
          onSelect={setLanguage}
          options={EDITOR_LANGUAGE_OPTIONS}
        />
      </div>
      <BaseDiffEditor
        tipShow={true}
        style={{ height: editorHeight }}
        language={language}
      />
    </Fragment>
  );
};

export default ToolWrap(Diff, {
  key: 'Diff',
  title: '文本diff',
  description: '文本diff',
  path: 'diff',
  icon: <DiffOutlined />,
  keywords: ['diff', '文本', '对比'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
