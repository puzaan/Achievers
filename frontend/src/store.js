import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { enrollReducer } from './reducers/enrollReducers';
import { userLoginReducer } from 'reducers/userReducers';
import { formDeleteReducer, formDetailReducer, formListReducer} from 'reducers/FormDetailsReducer';


const reducer = combineReducers({
    enrollList : enrollReducer,
    userLogin: userLoginReducer,
    formList: formListReducer,
    formById: formDetailReducer,
    formDelete: formDeleteReducer
});
const userInfoFromStore = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const initialState ={
    userLogin: {
        userInfo : userInfoFromStore,
        formList: formListReducer
    }
};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(... middleware)
    )

)
export default store;