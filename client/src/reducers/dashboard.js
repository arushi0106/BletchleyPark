export default (dashboard = [], action) => {
  switch (action.type) {
    case "FETCH_DASHBOARD":
      console.log(action.payload);
      return action.payload;
    default:
      return dashboard;
  }
};
