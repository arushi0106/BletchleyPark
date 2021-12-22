export default (
    newsfeed=[],
    action
  ) => {
    switch (action.type) {
      case "FETCH_ALL":
        console.log(action.payload);
        return action.payload;
      default:
        return newsfeed;
    }
  };
  