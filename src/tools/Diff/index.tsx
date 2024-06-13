"use client";
import { Select } from "antd";
import { Fragment, useState } from "react";

import {
  BaseDiffEditor,
  EDITOR_LANGUAGE_OPTIONS,
  EEditorLanguage,
} from "@/components/Editor";
import ToolModule from "@/components/ToolModule";
import { TOOLS_KEY_ENUM } from "@/types";

const Diff = () => {
  const [language, setLanguage] = useState<EEditorLanguage>(
    EEditorLanguage.PLAINTEXT
  );

  return (
    <Fragment>
      <div style={{ height: 36 }}>
        <span style={{ fontWeight: 500, fontSize: 14 }}>语言：</span>
        <Select
          style={{ width: 140, padding: "2px 0" }}
          showSearch
          value={language}
          onSelect={setLanguage}
          options={EDITOR_LANGUAGE_OPTIONS}
        />
      </div>
      <BaseDiffEditor
        tipShow={true}
        style={{ height: "calc(100vh - 250px)" }}
        language={language}
      />
    </Fragment>
  );
};

export default ToolModule(Diff, TOOLS_KEY_ENUM.Diff);
