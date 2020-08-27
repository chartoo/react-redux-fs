import { combineReducers } from 'redux';
import cakeReducer from '../cakes/reducer'
import userReducer from '../users/reducer'
const rootReducer = combineReducers({
    cakeReducer,
    userReducer

});

export default rootReducer;