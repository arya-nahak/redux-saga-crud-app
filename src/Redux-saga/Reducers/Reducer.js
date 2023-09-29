const initialState = {
  isLoading: false,
  data: [],
  singleData: {},
  error: null,
  addRefresh: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return { ...state, data: payload, isLoading: false };
    case "FAILURE":
      return { ...state, error: payload, isLoading: false };

    case "ADD_REQUEST":
      return { ...state, isLoading: true, addRefresh: false };
    case "ADD_SUCCESS":
      return { ...state, isLoading: false, addRefresh: true };
    case "ADD_FAILURE":
      return { ...state, addRefresh: false, isLoading: false };

    case "SINGLE_REQUEST":
      return { ...state, isLoading: true };
    case "SINGLE_SUCCESS":
      return { ...state, singleData: payload, isLoading: false };
    case "SINGLE_FAILURE":
      return { ...state, error: payload, isLoading: false };

    case "UPDATE_REQUEST":
      return { ...state, isLoading: true, addRefresh: false };
    case "UPDATE_SUCCESS":
      return { ...state, data: payload, isLoading: false, addRefresh: true };
    case "UPDATE_FAILURE":
      return { ...state, error: payload, isLoading: false, addRefresh: false };

    case "DELETE_REQUEST":
      return { ...state, isLoading: true, addRefresh: false };
    case "DELETE_SUCCESS":
      return {
        ...state,
        data: state.data.filter((data) => data.id !== payload),
        isLoading: false,
        addRefresh: true,
      };
    case "DELETE_FAILURE":
      return { ...state, error: payload, addRefresh: "lop", isLoading: false };

    default:
      return state;
  }
};
