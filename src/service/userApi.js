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
export const uploadUserImage = (formData, token) => {
  let endpoint = '/user/me/avatar';
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.post(endpoint, formData, myHeader);
};
export const getUserImage = (idUser) => {
  let endpoint = `/user/${idUser}/avatar`;

  return axiosClient.get(endpoint);
};
