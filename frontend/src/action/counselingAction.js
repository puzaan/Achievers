import axios from 'axios'
import { COUNSELING_CREATE_FAIL, COUNSELING_CREATE_REQUEST, COUNSELING_CREATE_SUCESS } from 'constants/counseling'

export const CreateCounselling = (name, email, number, course, date, counselling) => async(dispatch) => {
    try {
        dispatch({
            type: COUNSELING_CREATE_REQUEST
        });
        const {data}= await axios.post('http://localhost:5000/api/counseling/add', {
            name, email, number, course, date
        })
        dispatch({
            type: COUNSELING_CREATE_SUCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: COUNSELING_CREATE_FAIL,
            payload:
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
        
    }
}