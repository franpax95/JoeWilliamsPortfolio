import axios from 'axios';
import { 
    GET, 
    LOADING, 
    ERROR, 
    FIND,
    CHANGE_PAGE,
    CHANGE_DESCRIPTION 
} from '../types/projectsTypes';

export const find = id => async (dispatch) => {
    dispatch({ type: LOADING });

    try{
        const response = await axios.get(`/api/projects/${id}`);
        dispatch({ type: FIND, payload: response.data });
    }catch(error){
        console.error(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede acceder a esta sección en este momento'
        });
    };
}

export const get = () => async (dispatch) => {
    dispatch({ type: LOADING });

    try{
        const response = await axios.get(`/api/projects`);
        dispatch({ type: GET, payload: response.data });
    }catch(error){
        console.error(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede cargar el contenido en este momento'
        });
    }
}

export const changeDescription = (newDescription) => (dispatch) => {
    dispatch({ type: CHANGE_DESCRIPTION, payload: newDescription });
}

export const changePage = (newPage) => (dispatch) => {
    dispatch({ type: CHANGE_PAGE, payload: newPage });
}