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

export const updateNote = (index, updatedNote) => {
  return {
      type: 'UPDATE_NOTE',
      payload: { index, updatedNote },
  };
};
