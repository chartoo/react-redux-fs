import React, { useState } from 'react'
import { buyCake, addCake } from './redux/cakes/actions';
import { connect } from 'react-redux'

const [number,setNumber]=useState(1)

function PayloadCake(props) {
    console.log(props);
    return (
        <div>
            <h2>Use Map State and Dispatch</h2>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            Enter Number : <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={props.buyCake(number)}>Buy Cake</button> &emsp;
            <button onClick={props.addCake(number)}>Add Cake</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number)),
        addCake: number => dispatch(addCake(number)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (PayloadCake) 