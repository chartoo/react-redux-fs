import 
{
    BUY_CAKE,
    ADD_CAKE
} from "./type"

const buyCake=()=>{
    return{
        type: BUY_CAKE
    }
}
const addCake=()=>{
    return {
        type : ADD_CAKE
    }
}

export  {buyCake,addCake}