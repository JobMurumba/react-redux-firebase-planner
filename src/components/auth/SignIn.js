import React, { Component } from 'react'
import {signIn} from '../../actions/auth'
import {connect} from 'react-redux'
 class SignIn extends Component {
     state ={
        email:"",
        password:"",
     }

     handleChange =(e)=>{
         this.setState({
            [e.target.id]:e.target.value
         })
     }
     handleSubmit = (e)=>{
        e.preventDefault()
        this.props.signIn(this.state)

     }
    render() {
        const {authError} = this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    SignIn
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
              </div>
                    <div className="input-field">
                    <label htmlFor="password">Email</label>
                    <input type="password" id="password" onChange={this.handleChange}/>


                </div>
                <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                          SignIn
                        </button> 
                </div>
                <div className="red-text center">
                    {authError?<p>{authError}</p>:null}
                </div>
                </form>
                
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        authError:state.auth.authError
    }
}
export default connect(mapStateToProps,{signIn})(SignIn)
