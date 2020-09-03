import React, { Profiler } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../actions/auth'
const SignedInLinks = (props)=>{   

     return(
         <ul className="right">
             <li><NavLink to="/create">New project</NavLink></li>
             <li><a href="#" onClick={props.signOut} >Log Out</a></li>
             <li><NavLink to="/" className="btn btn-floating  pink lighten-1">{props.profile.initials}</NavLink></li>
         </ul>
       
          
    )   
}

export default connect(null,{signOut})(SignedInLinks);