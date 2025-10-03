"use client";
import { useState } from "react";
import { urlDecoder, urlEncoder } from "@/utils/urlEncDecUtil";

export default function UrlEncoderPage() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const resetTextbox = () => {
    setInputData("");
    setOutputData("");
  };

  const encodeUrl = () => {
    const encodedString = urlEncoder(inputData);
    setOutputData(encodedString);
  };

  const decodeUrl = () => {
    const decodedString = urlDecoder(inputData);
    setOutputData(decodedString);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(outputData);
  }

  return (
    <div className="mt-8 px-4">
      <div className="text-xl">Url Encoder/Decoder</div>
      <div className="grid grid-flow-col gap-4">
        <div>
          <div>Input</div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message here..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            rows={20}
          ></textarea>
        </div>
        <div>
          <div>Output</div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message here..."
            value={outputData}
            readOnly
            rows={20}
          ></textarea>
        </div>
      </div>
      <div className="justify-center flex space-x-4 mt-8">
        <button
          type="button"
          onClick={resetTextbox}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={encodeUrl}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Encode
        </button>
        <button
          type="button"
          onClick={decodeUrl}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Decode
        </button>
        <button
          type="button"
          onClick={copyOutput}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Copy Output
        </button>

      </div>
    </div>
  );
}
