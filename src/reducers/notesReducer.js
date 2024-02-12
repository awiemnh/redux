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
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note, index) =>
          index === action.payload.index ? action.payload.updatedNote : note
        ),
      };

    case "DELETEALL_NOTE":
      return {
        ...state,
        notes: [],
      };

    default:
      return state;
  }
};

export default notesReducer;
