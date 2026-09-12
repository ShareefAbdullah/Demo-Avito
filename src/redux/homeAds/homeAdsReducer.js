const initialState = {
  homeAds: [],
  loading: false,
};

export const homeAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "homeAds/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "homeAds/load/fulfilled":
      return {
        ...state,
        homeAds: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
