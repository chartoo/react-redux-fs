import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake, addCake } from './redux/cakes/actions';


export default function CakeHook() {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    return (
        <div>
            <hr/>
            <h3>Cake Hook Function</h3>
            <h3>Number of Cakes - {numOfCakes}</h3>
           
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button> &emsp;
            <button onClick={()=>dispatch(addCake())}>Buy Cake</button>
            <hr/>
        </div>
    )
}

