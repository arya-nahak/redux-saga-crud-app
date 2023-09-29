

export const Request = (payload) => ({
  type: "REQUEST",
  payload
})

export const Success = (payload) => ({
  type: "SUCCESS",
  payload
})

export const Failure = (payload) => ({
  type: "FAILURE",
  payload
})

export const addRequest = (payload) => ({
  type: "ADD_REQUEST",
  payload
})

export const addSuccess = (payload) => ({
  type: "ADD_SUCCESS",
  payload
})

export const addFailure = (payload) => ({
  type: "ADD_FAILURE",
  payload
})

export const getSingleRequest = (payload) => ({
  type: "SINGLE_REQUEST",
  payload
})

export const getSingleSuccess = (payload) => ({
  type: "SINGLE_SUCCESS",
  payload
})

export const getSingleFailure = (payload) => ({
  type: "SINGLE_FAILURE",
  payload
})

export const updateRequest = (payload) => ({
  type: "UPDATE_REQUEST",
  payload
})

export const updateSuccess = (payload) => ({
  type: "UPDATE_SUCCESS",
  payload
})

export const updateFailure = (payload) => ({
  type: "UPDATE_FAILURE",
  payload
})


export const delRequest = (payload) => ({
  type: "DELETE_REQUEST",
  payload
})

export const delSuccess = (payload) => ({
  type: "DELETE_SUCCESS",
  payload
})

export const delFailure = (payload) => ({
  type: "DELETE_FAILURE",
  payload
})


