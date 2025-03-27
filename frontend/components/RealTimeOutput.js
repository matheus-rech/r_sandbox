import React, { useEffect, useState } from 'react';
import { streamOutput } from '../api';

const RealTimeOutput = () => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    const socket = streamOutput((message) => {
      setOutput((prevOutput) => `${prevOutput}\n${message}`);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="real-time-output">
      <h2>Real-Time Output</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default RealTimeOutput;
