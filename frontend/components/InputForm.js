import React, { useState } from 'react';

const InputForm = ({ rCode, setRCode, prompt, setPrompt, onExecute }) => {
  const [inputType, setInputType] = useState('rCode');

  const handleInputChange = (e) => {
    if (inputType === 'rCode') {
      setRCode(e.target.value);
    } else {
      setPrompt(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onExecute();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="rCode"
            checked={inputType === 'rCode'}
            onChange={() => setInputType('rCode')}
          />
          R Code
        </label>
        <label>
          <input
            type="radio"
            value="prompt"
            checked={inputType === 'prompt'}
            onChange={() => setInputType('prompt')}
          />
          Prompt
        </label>
      </div>
      <div>
        <textarea
          value={inputType === 'rCode' ? rCode : prompt}
          onChange={handleInputChange}
          placeholder={inputType === 'rCode' ? 'Enter R code here...' : 'Enter prompt here...'}
        />
      </div>
      <button type="submit">Execute</button>
    </form>
  );
};

export default InputForm;
