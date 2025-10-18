"use client";
import { base64Decoder, base64Encoder } from "@/utils/base64Util";
import { useState } from "react";
import { useToast } from "./../components/toast";

export default function Base64Page() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const { showToast } = useToast();

  const resetTextbox = () => {
    setInputData("");
    setOutputData("");
  };

  const encodeBase64 = () => {
    const encodedString = base64Encoder(inputData);
    setOutputData(encodedString);
  };

  const decodeBase64 = () => {
    const decodedString = base64Decoder(inputData);
    setOutputData(decodedString);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(outputData);
    showToast("Output copied to clipboard!", "success");
  };

  return (
    <div className="mt-8 px-4">
      <div className="text-xl">Base 64</div>
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
          onClick={encodeBase64}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Encode
        </button>
        <button
          type="button"
          onClick={decodeBase64}
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
