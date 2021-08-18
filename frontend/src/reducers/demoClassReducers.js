import { DEMOCLASS_CREATE_FAIL, DEMOCLASS_CREATE_REQUEST, DEMOCLASS_CREATE_SUCESS } from "constants/demoClass";



export const createDemoReducer = (state = {}, action) => {
    switch(action.type){
        case DEMOCLASS_CREATE_REQUEST:
            return{
                ...state,
                loading: true
            };
            case DEMOCLASS_CREATE_SUCESS:
                return{
                    loading: false, success: true, demoClassData: action.payload};
                    case DEMOCLASS_CREATE_FAIL:
                        return{
                            loading: false, error: action.payload
                        }
                        default:
                            return state; 
    }
}