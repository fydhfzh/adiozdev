import axiosInstance from '../config/axios';

const getRepos = async () => {
  const response = await axiosInstance.get('/users/fydhfzh/repos?sort=created&direction=desc&per_page=8');
  const data = response.data;
  return data;
};

export default getRepos;
