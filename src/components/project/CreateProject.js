import React, { Component } from 'react'
import {createProject} from '../../actions/project'
import {connect} from 'react-redux'

 class CreateProject extends Component {
     state ={
        title:"",
        content:"",
     }

     handleChange =(e)=>{
         this.setState({
            [e.target.id]:e.target.value
         })
     }
     handleSubmit = (e)=>{
        e.preventDefault()
        this.props.createProject(this.state)

     }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Create project
                </h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
              </div>
                    <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                   
                    <textarea className="materialize-textarea"  
                    id="content" cols="30" rows="10" onChange={this.handleChange}/>

                </div>
                <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                          Create
                        </button> 
                </div>
                </form>
                
            </div>
        )
    }
}

export default connect(null,{createProject})(CreateProject)
