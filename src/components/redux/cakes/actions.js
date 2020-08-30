import 
{
    BUY_CAKE,
    ADD_CAKE
} from "./type"

const buyCake=(number=1)=>{
    return{
        type: BUY_CAKE,
        payload:number
    }
}
const addCake=(number=1)=>{
    return {
        type : ADD_CAKE,
        payload:number
    }
}

export  {buyCake,addCake}