import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      console.log(action);
      return {
        ...state,
        banner:
          action.homeData?.find(
            (item) =>
              item.banner ===
              "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-new-release-vn.png"
          )?.items || [],
      };
    default:
      return state;
  }
};

export default appReducer;
