import ROOTACTIONS from "../actions/index";
const initState = [
  {
    title: "This is sample list",
    id: 1,
    cards: [
      { id: 2, text: "Hello there" },
      { id: 3, text: "General Kenobi" },
    ],
  },
  {
    title: "This is another sample list",
    id: 4,
    cards: [
      { id: 5, text: "Static data" },
      { id: 6, text: "Example text" },
    ],
  },
  {
    title: "This is another sample list",
    id: 7,
    cards: [
      { id: 8, text: "Static data" },
      { id: 9, text: "Example text" },
    ],
  },
];

const reducerLists = (state = initState, action) => {
  switch (action.type) {
    case ROOTACTIONS.ADD_LIST:
      const newList = {
        title: action.payload,
        card: [],
        id: Math.random(),
      };
      return [...state, newList];
    default:
      return state;
  }
};

export default reducerLists;
