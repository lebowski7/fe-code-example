import axios from 'axios';
import { REPOS_PER_PAGE } from '../constants';

const GET_REPOS_URL: string = `https://api.github.com/users/yahoo/repos?page=1&per_page=${REPOS_PER_PAGE}&client_id=bcb14f311b72d4bafb58&client_secret=6d183fd3515e77bfa872ca41b136d1f5954795d6`;

export const fetchReposService = () => {
  return axios.get(GET_REPOS_URL).then(response => {
    return response.data
  })
};

export const fetchContributorsService = (repoName: string) => {
  return axios.get(`https://api.github.com/repos/yahoo/${repoName}/contributors?client_id=bcb14f311b72d4bafb58&client_secret=6d183fd3515e77bfa872ca41b136d1f5954795d6`).then(response => {
    return response.data.length;
  })
};