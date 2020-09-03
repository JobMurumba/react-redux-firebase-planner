const functions = require('firebase-functions');
const admin = require('firebase-admin')
//admin.initializeApp(functions.config().firebase)
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const createNoticication = notification =>{
    return admin.firestore().collection('notifications').add(notification)
        .then(doc=>console.log("notification added",doc))
}
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    
    const project = doc.data()
    
    const notification = {
        content :'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNoticication(notification)

})
exports.userJoined = functions.auth.user().onCreate(user=>{
    //user created in auth service
    //get user profile from collection
    admin.firestore().collection('users').doc(user.uid).get().then(doc=>{
        const newuser=doc.data()
        const notification = {
            content:'Joined the club',
            user: `${newuser.firstname} ${newuser.lastname}`,
            time: admin.firestore.FieldValue.serverTimestamp() 
        }
        createNoticication(notification)
    })
})