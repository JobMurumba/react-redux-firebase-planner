import React from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
const  ProjectDetails=(props)=> {
    const {project}=props
    if(project){
       
        return(
            <div className="container project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">
                            {project.title} 
                        </div>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>posted by the {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd of september</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container  center">
                <p>Loading project...</p>
            </div>
        )
    }

    return (
        <div>
        {project}
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects? projects[id]:null
    return {
        project:project
    }
}
// export default compose(connect(mapStateToProps),
// firestoneConnect([{
//         "collection":"projects"
//     }])
// )(ProjectDetails)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        "collection":'projects'
    }])
    )(ProjectDetails);