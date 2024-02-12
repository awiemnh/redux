// actions/dataActions.js
export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

export const fetchDataError = (error) => ({
    type: 'FETCH_DATA_ERROR',
    payload: error,
});

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataError(error.message));
        }
    };
};
