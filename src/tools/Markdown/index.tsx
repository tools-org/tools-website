"use client";

import { useState } from "react";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import { Editor } from "@bytemd/react";
import GFM_ZH from "@bytemd/plugin-gfm/locales/zh_Hans.json";
import MATH_ZH from "@bytemd/plugin-math/locales/zh_Hans.json";
import MERMAID_ZH from "@bytemd/plugin-mermaid/locales/zh_Hans.json";
import EDITOR_ZH from "bytemd/locales/zh_Hans.json";
import "github-markdown-css";

import ToolModule from "@/components/ToolModule";
import { TOOLS_KEY_ENUM } from "@/types";
import MARKDOWN_TEXT from "./text.md";
import "./index.css";

const plugins = [
  gfm({ locale: GFM_ZH }),
  highlight(),
  frontmatter(),
  breaks(),
  gemoji(),
  math({ locale: MATH_ZH }),
  mediumZoom(),
  mermaid({ locale: MERMAID_ZH }),
  // Add more plugins here
];

const Markdown = () => {
  const [value, setValue] = useState(MARKDOWN_TEXT);

  return (
    <section className="tools-markdown">
      <Editor
        value={value}
        plugins={plugins}
        locale={EDITOR_ZH}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </section>
  );
};

export default ToolModule(Markdown, TOOLS_KEY_ENUM.Markdown);
