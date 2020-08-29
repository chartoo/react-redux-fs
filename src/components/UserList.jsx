import React, { Component } from 'react'

export default function UserList(props) {
    console.log(props.user);
        return (
               <tr key={props.user.id}>
                   <td>{props.user.id}</td>
                   <td>{props.user.name}</td>
                   <td>{props.user.email}</td>
                   <td>{"city> " +props.user.address.city+" - St >" + props.user.address.street }</td>
                   <td>
                       <a href="#">Edit</a> &emsp;
                       <a href="#">Del</a>
                   </td>
               </tr>
        )
}
