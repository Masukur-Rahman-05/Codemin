import React, { useState } from "react";
import { CodeEditor } from "./components/Editor";
import { ClockLoader } from "react-spinners";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen w-full bg-stone-900 text-white p-4 sm:p-6 overflow-x-hidden">
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-dot font-bold text-green-600 tracking-widest">
          CODEMIN{" "}
          <sup className="text-green-400 text-xs italic font-light">
            - online editor -
          </sup>
        </h1>

        <p className="text-xs sm:text-sm text-gray-200 font-dot tracking-widest">
          Not Recommended for Mobile Devices
        </p>
      </div>
      {loading && (
        <div className="fixed inset-0 bg-stone-900 bg-opacity-90 flex items-center justify-center z-50">
          <ClockLoader color="#36d399" />
        </div>
      )}

      {/* Editor + Output */}
      <div className="w-full flex flex-col gap-6">
        <CodeEditor setLoading={setLoading} />
      </div>

      {/* Footer */}
      <div className="w-full mt-6">
        <h2 className="text-xs sm:text-sm text-gray-200 font-dot flex flex-wrap items-center gap-2 tracking-widest">
          Developed by -{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-masukur-rahaman-927790343/"
            className="text-green-400 hover:text-green-600 flex items-center gap-1"
          >
            <FaLinkedin className="w-4 h-4 text-white" />
            Masukur Rahaman
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
