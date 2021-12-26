export default (dashleaderboard = [], action) => {
    switch (action.type) {
      case "FETCH_DASH_LEADERBOARD":
        console.log(action.payload);
        return action.payload;
      default:
        return dashleaderboard;
    }
  };
  