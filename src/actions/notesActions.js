export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const deleteNote = (index) => {
  return {
    type: "DELETE_NOTE",
    payload: index,
  };
};

export const deleteAllNote = (note) => {
  return {
    type: "DELETEALL_NOTE",
    payload: note,
  };
};

export const editNote = (note) => {
  return {
    type: "EDIT_NOTE",
    payload: note,
  };
};
