import React, { Component } from 'react'
import { buyCake, addCake } from './redux/cakes/actions';
import { 
    getuserSuccess,
    getUserFail
} from './redux/users/action'
import { connect } from 'react-redux'
import UserList from './UserList'
import CakeHook from './CakeHook'
// import PayloadCake from './PayloadCake'
const axios = require('axios')

const userList=(props)=>{
    return props.users.map((user)=>
    <UserList user={user}></UserList>
   )
}



function CakeContainer(props) {
    console.log(props);
    return (
        <div>
            {/* <PayloadCake></PayloadCake> */}
            <CakeHook></CakeHook>
            <h2>Use Map State and Dispatch</h2>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button> &emsp;
            <button onClick={props.addCake}>Add Cake</button>
            <div>
                <button onClick={props.getUserList}>User List </button>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                                {userList(props)}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
const fetchUsers=()=>{
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
        // axios.get('https://jsonplaceholder.typicode.com/photos')
             .then(response =>{
                  dispatch(getuserSuccess(response.data));
             })
             .catch(error=>{
                 dispatch(getUserFail(error.message));
             })
    }
   }
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
        users: state.user.users,
        loading:state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake()),
        getUserList:()=>dispatch(fetchUsers())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer) 