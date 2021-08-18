const { COUNSELING_CREATE_REQUEST, COUNSELING_CREATE_SUCESS, COUNSELING_CREATE_FAIL } = require("constants/counseling");


export const createCounseling = (state = {}, action) => {
    switch(action.type){
        case COUNSELING_CREATE_REQUEST:
        return {
            ...state,
            loading: true
        }
        case COUNSELING_CREATE_SUCESS:
            return{
                loading: false, success: true, counselingData: action.payload
            }
            case COUNSELING_CREATE_FAIL:
                return{
                    loading:false, error: action.payload
                }
                default:
                    return state;
    }
}