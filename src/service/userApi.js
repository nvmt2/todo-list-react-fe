import axiosClient from 'service/axiosClient';

export const signUp = (payload) => {
  let endpoint = '/user/register';
  return axiosClient.post(endpoint, payload);
};
export const signIn = (payload) => {
  let endpoint = '/user/login';
  return axiosClient.post(endpoint, payload);
};
export const signOut = (token) => {
  let endpoint = '/user/logout';
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.post(endpoint, {}, myHeader);
};
export const updateUser = (payload, token) => {
  let endpoint = '/user/me';
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.put(endpoint, payload, myHeader);
};
