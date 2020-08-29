import rootReducer from '../reducer/index'
import {applyMiddleware,compose,createStore} from 'redux'
const thunkMiddleware=require('redux-thunk').default
const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
export default store;