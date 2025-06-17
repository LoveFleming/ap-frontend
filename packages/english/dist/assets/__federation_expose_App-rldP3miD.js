import { importShared } from './__federation_fn_import-gVVR6EuA.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import IrregularVerbTable from './__federation_expose_IrregularVerbTable-DdGGrbGB.js';
import ArticlePractice from './__federation_expose_ArticlePractice-CULSXHm7.js';

const {useState} = await importShared('react');
const App = () => {
  const [tab, setTab] = useState("verb");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 24 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "English Micro Frontend" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("verb"), style: { marginRight: 8 }, children: "不規則動詞" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("article"), children: "冠詞練習" })
    ] }),
    tab === "verb" ? /* @__PURE__ */ jsxRuntimeExports.jsx(IrregularVerbTable, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArticlePractice, {})
  ] });
};

export { App as default };
