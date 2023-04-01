import { SET_LOADING_STATUS, GET_ARTICLES } from '../action/actionType'

export const initState = {
    ARTICLES: [],
    loading: false,
}

const articleReducer = (state = initState, action) => {
    switch(action.type){
        case GET_ARTICLES:
            return{
                ...state,
                articles: action.payload,
            };
        case SET_LOADING_STATUS:
            return{
                ...state,
                loading: action.status,
            };
            default:
            return state;
    }
}

export default articleReducer;