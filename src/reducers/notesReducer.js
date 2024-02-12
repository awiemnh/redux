const initialState = {
  notes: [],
};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note, index) => index !== action.payload),
      };
    case "DELETEALL_NOTE":
      return {
        ...state,
        notes: [],
      };
    case "EDIT_NOTE":
      return { ...state };

    default:
      return state;
  }
};

export default notesReducer;
