import { combineReducers } from 'redux';
import cakeReducer from '../cakes/reducer'
import userReducer from '../users/reducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    user:userReducer
});

export default rootReducer;