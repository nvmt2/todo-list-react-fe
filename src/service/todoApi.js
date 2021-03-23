import axiosClient from 'service/axiosClient';

export const getTask = (idTask, token) => {
  let endpoint = `/task/${idTask}`;
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.get(endpoint, myHeader);
};
export const getAllTasks = (token) => {
  let endpoint = '/task';
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.get(endpoint, myHeader);
};

export const updateTask = (idTask, payload, token) => {
  let endpoint = `/task/${idTask}`;
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.put(endpoint, payload, myHeader);
};

export const removeTask = (idTask, token) => {
  let endpoint = `/task/${idTask}`;
  let myHeader = {
    headers: {
      Authorization: token,
    },
  };
  return axiosClient.delete(endpoint, myHeader);
};
