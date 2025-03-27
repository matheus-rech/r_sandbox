import React from 'react';

const OutputSection = ({ output, files, onDownload }) => {
  return (
    <div className="output-section">
      <h2>Output</h2>
      <pre>{output}</pre>
      <h3>Generated Files</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button onClick={() => onDownload(file)}>Download {file}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutputSection;
