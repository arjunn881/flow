const authReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "AUTH":
      return state
      break;

    default:
      break;
  }
};

export default authReducer;
