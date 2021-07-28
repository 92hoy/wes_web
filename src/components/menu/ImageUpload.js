import React, { useState } from "react";

import Dropzone from "react-dropzone";
import "../../static/css/dropzone.css";

export default function ImageUpload() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Drag'n'drop images, or click to select files</p>
            </div>
          );
        }}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
