import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resume';

const getResume = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const uploadResume = async (formData) => {
  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export { getResume, uploadResume };
