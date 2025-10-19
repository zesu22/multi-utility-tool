"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import { useState } from "react";

export default function SwaggerUi() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  return (
    <div className="mt-8 px-4">
      <div className="grid grid-flow-col grid-cols-12 gap-4">
        <div className="col-span-10">
          <div>OpenApi Yaml Url</div>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your raw url of you openapi yaml file..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></input>
        </div>
        <button
          type="button"
          onClick={() => setOutputData(inputData)}
          className="h-max self-end col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Render
        </button>
      </div>
      {outputData && (
        <ApiReferenceReact
          configuration={{
            url: outputData,
          }}
        />
      )}
    </div>
  );
}
