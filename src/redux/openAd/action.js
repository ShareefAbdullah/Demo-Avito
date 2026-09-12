export const loadLargeImage = () => {
  return (dispatch) => {
    dispatch({ type: "largeImage/load/pending" });

    fetch("http://localhost:5000/sliderImage")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "largeImage/load/fulfilled",
          payload: data,
        })
      );
  };
};

export const loadAddress = () => {
  return (dispatch) => {
    dispatch({ type: "address/load/pending" });

    fetch("http://localhost:5000/addresses")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "address/load/fulfilled",
          payload: data,
        })
      );
  };
};

export const loadPhone = () => {
  return (dispatch) => {
    dispatch({ type: "phone/load/pending" });

    fetch("http://localhost:5000/phone")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "phone/load/fulfilled",
          payload: data,
        })
      );
  };
};

export const loadDescription = () => {
  return (dispatch) => {
    dispatch({ type: "description/load/pending" });

    fetch("http://localhost:5000/adDescription")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "description/load/fulfilled",
          payload: data,
        })
      );
  };
};

export const loadTitle = () => {
  return (dispatch) => {
    dispatch({ type: "title/load/pending" });

    fetch("http://localhost:5000/title")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "title/load/fulfilled",
          payload: data,
        })
      );
  };
};
