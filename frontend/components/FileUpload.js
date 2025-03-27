import React, { useState } from 'react';

const FileUpload = ({ onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    onUpload(selectedFiles);
  };

  return (
    <div className="file-upload">
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default FileUpload;
