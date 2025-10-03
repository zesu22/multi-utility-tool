"use client";

import { useState } from "react";
import { decodeJwt } from "@/utils/jwtDecodeUtil";

export default function JwtDecoderPage() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState<{
    header: string;
    payload: string;
  } | null>(null);

  const resetTextbox = () => {
    setInputData("");
    setOutputData(null);
  };

  const decodeJwtToken = () => {
    const decodedValue = decodeJwt(inputData);
    setOutputData(decodedValue);
  };

  const copyOutput = () => {
    if (!outputData) return;
    navigator.clipboard.writeText(outputData.payload);
  };

  return (
    <div className="mt-8 px-4">
      <div className="text-xl">JWT Decoder</div>
      <div className="grid grid-flow-col gap-4">
        <div>
          <div>Encoded Value</div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message here..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            rows={20}
          ></textarea>
        </div>
        <div className="grid grid-flow-row gap-2">
          <div>
            <div>Decoded Header</div>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here..."
              value={
                outputData ? JSON.stringify(outputData.header, null, 2) : ""
              }
              readOnly
              rows={5}
            ></textarea>
          </div>
          <div>
            <div>Decoded Payload</div>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here..."
              value={
                outputData ? JSON.stringify(outputData.payload, null, 2) : ""
              }
              readOnly
              rows={12}
            ></textarea>
          </div>
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
          onClick={decodeJwtToken}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Decode JWT
        </button>
        <button
          type="button"
          onClick={copyOutput}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Copy Payload
        </button>
      </div>
    </div>
  );
}
