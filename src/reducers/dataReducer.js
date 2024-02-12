// reducers/dataReducer.js
const initialState = {
    data: [],
    error: null,
  };
  
  export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, error: null };
      case 'FETCH_DATA_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  