import React from 'react'
import moment from 'moment'

const Notifications = (props)=>{
    const {Notifications} = props
    return(
        <div className="section">
            <div className="card z-depth-0">
           <div className="card-content">
               <span className="card-title">Notifications </span>
               <ul className="notifications">
                   {Notifications && Notifications.map(Notification=>{
                       return (
                           <li key={Notification.id}>
                               <span className="pink-text">
                                   {Notification.user}
                               </span>
                               <span>{Notification.content}</span>
                               <div className="grey-text note-date">
                                    {(moment(Notification.time.toDate())).fromNow()}
                               </div>
                               </li>
                       )
                   })}
                   
               </ul>
           </div>
            </div>
        </div>
    )
}

export  default Notifications;