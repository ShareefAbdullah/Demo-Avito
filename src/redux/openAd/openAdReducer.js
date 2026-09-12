const initialState = {
  largeImage: [],
  address: [],
  phone: [],
  description: [],
  title: [],
  loading: false,
};

export const openAdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "largeImage/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "largeImage/load/fulfilled":
      return {
        ...state,
        largeImage: action.payload,
        loading: false,
      };

    case "address/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "address/load/fulfilled":
      return {
        ...state,
        address: action.payload,
        loading: false,
      };

    case "phone/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "phone/load/fulfilled":
      return {
        ...state,
        phone: action.payload,
        loading: false,
      };

    case "description/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "description/load/fulfilled":
      return {
        ...state,
        description: action.payload,
        loading: false,
      };

    case "title/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "title/load/fulfilled":
      return {
        ...state,
        title: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
