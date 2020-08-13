import { 
    GET, 
    LOADING, 
    ERROR, 
    FIND, 
    CHANGE_PAGE,
    CHANGE_DESCRIPTION 
} from '../types/projectsTypes';

const INITIAL_STATE = {
    loading: false,
    error: '',
    projects: [],
    project: {},
    currentPage: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                projects: action.payload,
                loading: false,
                error: ''
            };

        case FIND:
            return {
                ...state,
                project: action.payload,
                loading: false,
                error: ''
            };

        case LOADING:
            return {
                ...state, 
                loading: true
            };

        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        case CHANGE_DESCRIPTION:
            return {
                ...state,
                project: {
                    description: action.payload
                }
            };
        
        default: 
            return state;
    }
}