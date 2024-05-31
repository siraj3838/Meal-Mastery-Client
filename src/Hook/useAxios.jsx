import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://meal-mastery-server.vercel.app',
});

const useAxios = () => {
  return instance;
};

export default useAxios;