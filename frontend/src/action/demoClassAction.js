import axios from 'axios'
import { DEMOCLASS_CREATE_FAIL, DEMOCLASS_CREATE_REQUEST, DEMOCLASS_CREATE_SUCESS, DEMOCLASS_DETAIL_REQUEST } from 'constants/demoClass'

export const createDemoClass = (name, email, number, course, date) => async (dispatch) => {
try {
    dispatch({
        type: DEMOCLASS_CREATE_REQUEST
    });
    const {data} = await axios.post ('http://localhost:5000/api/scedual/add', {
        name, email, number, course, date
    });
    dispatch({
        type: DEMOCLASS_CREATE_SUCESS,
        payload: data
    })
} catch (error) {
    dispatch({
        type: DEMOCLASS_CREATE_FAIL,
        payload:
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    })
    
}
}