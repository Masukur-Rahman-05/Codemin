import React, { useState } from "react";
import axios from "axios";
import { langs } from "../components/data.js";
import { ClockLoader } from "react-spinners";

const BASE_URL = "https://emkc.org";

export const Output = ({ language, editorRef }) => {
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanOutput = (output) => {
    if (!output) return "";

    return (
      output
        // Replace Piston job paths with "Line X"
        .replace(
          /File\s+"\/piston\/jobs\/[\w-]+\/file0\.code",\s+line\s+(\d+)/g,
          "Line $1"
        )
        .replace(/\/piston\/jobs\/[\w-]+\/file0\.code:(\d+)/g, "Line $1")
        // Clean up "node:internal/..." or "internal/..." paths
        .replace(/(?:node:)?internal\/[\w\/:.-]+/g, "")
        // Clean up extra whitespace
        .replace(/\n{3,}/g, "\n\n")
        .trim()
    );
  };

  const runCode = async () => {
    setLoading(true);
    const sourceCode = editorRef.current.getValue();
    const version = langs[language];

    try {
      const res = await axios.post(`${BASE_URL}/api/v2/piston/execute`, {
        language: language,
        version: version,
        files: [{ content: sourceCode }],
      });

      setError(res.data.run.code);
      const output = res.data.run.output;
      setResult(cleanOutput(output) || "Error running code");
    } catch (err) {
      setResult("Something went wrong.");
      setError(1);
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      <button
        onClick={runCode}
        className="bg-transparent border border-green-500 hover:border-green-700 text-green-500 font-dot px-4 py-2 rounded-md mb-4 cursor-pointer text-sm sm:text-base"
      >
        Run
      </button>

      <div className="w-full h-[70vh] bg-stone-800 p-4 rounded-md overflow-y-auto">
        {loading ? (
          <div className="flex flex-col sm:flex-row justify-center items-center h-full gap-4">
            <ClockLoader color="#008512" size={30} />
            <p className="text-white font-semibold font-dot text-base sm:text-lg">
              Running...
            </p>
          </div>
        ) : (
          <div className="w-full h-full">
            <h2 className="text-lg sm:text-xl font-dot text-zinc-400 opacity-50 font-semibold mb-2 tracking-widest select-none">
              Output
            </h2>

            <div>
              <pre
                className={`${
                  error === 0 ? "text-green-500" : "text-red-500"
                } whitespace-pre-wrap font-output font-extralight text-sm sm:text-base`}
              >
                {result}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
