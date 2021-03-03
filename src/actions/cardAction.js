import ROOTACTIONS from "../actions/index";

export const addCard = (idList, text) => {
  return {
    type: ROOTACTIONS.ADD_CARD,
    payload: { text, idList },
  };
};
