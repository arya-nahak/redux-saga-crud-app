import axios from "axios";

axios.defaults.baseURL="https://650b2a5cdfd73d1fab09b366.mockapi.io/users"

export const getUsersApi = async () => axios.get(`/user`)

export const getSingleUserByID = async (id) => axios.get(`/user/${id}`)

export const createUserApi = async (user) => axios.post(`/user/`,user)

export const updateUserApi = async (user) => axios.put(`/user/${user.id}`,user)

export const deleteUserApi = async (id) => axios.delete(`/user/${id}`)
