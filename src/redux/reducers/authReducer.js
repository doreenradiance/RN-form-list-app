const initialState = {
    login:false,
    user:null
}

export default (state,action)=>{
switch(action.type){
    case "LOGGED_IN":
        return {
            login:true, user:action.payload}
    default:
        return state;
}
}