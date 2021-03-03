import ROOTACTIONS from "../actions/index";

export const addList = (title) => {
  return {
    type: ROOTACTIONS.ADD_LIST,
    payload: title, 
  };
};
