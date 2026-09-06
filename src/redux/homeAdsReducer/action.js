export const loadHomeAds = () => {
  return (dispatch) => {
    dispatch({ type: "homeAds/load/pending" });
    fetch("http://localhost:5000/ad")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "homeAds/load/fulfilled",
          payload: data,
        });
      });
  };
};
