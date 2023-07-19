const ReducerData = (state, action) => {
    switch (action.type) {
        case "FETCH_MUSIC":
            // console.log(action);
            return {
                ...state,
                music: action.payload
            }
        case "FETCH_BEATS":
            // console.log(action);
            return {
                ...state,
                beats: action.payload
            }
        case "FETCH_SAMPLES":
            // console.log(action);
            return {
                ...state,
                samples: action.payload
            }
        case "FETCH_GENRES":
            // console.log(action);
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}

export default ReducerData;