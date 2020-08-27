import {
    BUY_CAKE,
    ADD_CAKE
} from './type';

const initialState={
    numOfCakes:10
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        case ADD_CAKE:{
            return{
                ...state,
                numOfCakes:state.numOfCakes +1 
            }
        }
        default: return state
    }
}

export default reducer