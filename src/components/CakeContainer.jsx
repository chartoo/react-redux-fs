import React, { Component } from 'react'
import {buyCake,addCake} from './redux/cakes/actions';
import {getUserList} from './redux/users/action'
import {connect} from 'react-redux'
const axios=require('axios')

function CakeContainer(props) {
    console.log(props)
        return (
            <div>
                <h2>Number of cakes - {props.numOfCakes}</h2>
                <button onClick={props.buyCake}>Buy Cake</button> &emsp;
                <button onClick={props.addCake}>Add Cake</button>
                <div>
                    <button onClick={props.getUserList}>User List </button>
                    <div>
                    <textarea name="" id="" cols="100" rows="30">
                        {props.users}
                    </textarea>
                    </div>
                </div>
            </div>
        )
    }
    // const fetchUsers=()=>{
    //     return function(dispatch){
    //         axios.get('https://jsonplaceholder.typicode.com/users')
    //              .then(response =>{
    //                   dispatch(getuserSuccess(response.data));
    //              })
    //              .catch(error=>{
    //                  dispatch(getUserFail(error.message));
    //              })
    //     }
    //    }
    const mapStateToProps=state=>{
        return {
            numOfCakes:state.numOfCakes,
            users:state.users
        }
    }

    const mapDispatchToProps=dispatch=>{
        return {
            buyCake:()=>dispatch(buyCake()),
            addCake:()=>dispatch(addCake()),

        }
    }
    

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer) 