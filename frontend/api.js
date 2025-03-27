import axios from 'axios';

const API_BASE_URL = '/api';

export const executeRCode = async (code) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/execute-r-code`, { code });
    return response.data;
  } catch (error) {
    console.error('Error executing R code:', error);
    throw error;
  }
};

export const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(`${API_BASE_URL}/upload-files`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading files:', error);
    throw error;
  }
};

export const downloadFiles = async (file) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/download-files`, {
      params: { file },
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading files:', error);
    throw error;
  }
};

export const streamOutput = (onMessage) => {
  const socket = new WebSocket(`${API_BASE_URL.replace(/^http/, 'ws')}/stream-output`);

  socket.onmessage = (event) => {
    onMessage(event.data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return socket;
};
