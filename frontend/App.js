import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputSection from './components/OutputSection';
import FileUpload from './components/FileUpload';
import RealTimeOutput from './components/RealTimeOutput';
import ErrorNotification from './components/ErrorNotification';
import { executeRCode, uploadFiles, downloadFiles } from './api';

const App = () => {
  const [rCode, setRCode] = useState('');
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [files, setFiles] = useState([]);
  const [realTimeOutput, setRealTimeOutput] = useState('');
  const [error, setError] = useState(null);

  const handleExecute = async () => {
    try {
      const result = await executeRCode(rCode || prompt);
      setOutput(result.output);
      setRealTimeOutput(result.realTimeOutput);
      setFiles(result.files);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpload = async (files) => {
    try {
      await uploadFiles(files);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDownload = async (file) => {
    try {
      await downloadFiles(file);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h1>R Language E2B Sandbox</h1>
      <InputForm
        rCode={rCode}
        setRCode={setRCode}
        prompt={prompt}
        setPrompt={setPrompt}
        onExecute={handleExecute}
      />
      <FileUpload onUpload={handleUpload} />
      <OutputSection output={output} files={files} onDownload={handleDownload} />
      <RealTimeOutput output={realTimeOutput} />
      {error && <ErrorNotification message={error} />}
    </div>
  );
};

export default App;
