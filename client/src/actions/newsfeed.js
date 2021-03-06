import * as api from "../api/newsfeed";

export const getnewsfeed = () => async (dispatch) => {
  try {
    const { data } = await api.getnewsfeed();
    // console.log(data);
    dispatch({ type: "FETCH_NEWSFEED", payload: data });
  } catch (error) {
    console.log(error);
  }
};
