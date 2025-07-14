import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { LanguageList } from "./LanguageList.jsx";
import { languageSnippets } from "./data.js";
import { Output } from "./Output.jsx";

export const CodeEditor = ({ setLoading }) => {
  const [code, setCode] = useState(languageSnippets.javascript);
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");

  const MONACO_LANGUAGE_MAP = {
    "c++": "cpp",
  };

  const onMount = (editor) => {
    editorRef.current = editor;

    const model = editor.getModel();
    const lineCount = model.getLineCount();
    const lastLineLength = model.getLineContent(lineCount).length;

    editor.setPosition({ lineNumber: lineCount, column: lastLineLength + 1 });
    editor.focus();

    setLoading(false);
  };

  const onSelect = (value) => {
    setLanguage(value);
    const snippet =
      languageSnippets[value] || `// Write your ${value} code here...`;
    setCode(snippet);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Editor Section */}
      <div className="w-full lg:w-3/5">
        <div className="mb-4">
          <LanguageList language={language} onSelect={onSelect} />
        </div>

        <Editor
          height="70vh"
          language={MONACO_LANGUAGE_MAP[language] || language}
          onMount={onMount}
          value={code}
          onChange={(code) => setCode(code)}
          theme="vs-dark"
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: "on",
            tabSize: 4,
            lineNumbers: "on",
            mouseWheelZoom: true,
            padding: { top: 18, bottom: 16 },
          }}
        />
      </div>

      {/* Output Section */}
      <div className="w-full lg:w-2/5 ">
        <Output language={language} editorRef={editorRef} />
      </div>
    </div>
  );
};
