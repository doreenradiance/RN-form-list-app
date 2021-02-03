import firebase from "../../firebase/firebase";


export function createEmailAccount(email, password) {
    return async (dispatch) => {
try {
   const user = await firebase
   .auth()
   .createUserWithEmailAndPassword(email,password)
dispatch(loggedIn(user))
} catch (error) {
    console.log(error)
}
    }
}

export function loginEmailAccount(email, password){
    return async (dispatch) => {
        try {
            const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
         dispatch(loggedIn(user))
         } catch (error) {
             console.log(error)
         }
    }
}

export function logout(){
    return async (dispatch) => {
        try {
            const user = await firebase
            .auth()
            .signOut()
         dispatch(loggedOut( ))
         } catch (error) {
             console.log(error)
         }
    }
}

function loggedIn(users) {
    return{
        type:"LOGGED_IN",
        payload:user 
    }
}

function loggedOut() {
    return{
        type:"LOGGED_OUT" 
    }
}