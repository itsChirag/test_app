import { LOGIN } from '../Actions/login';


const initialState = {
    email:'',
    password:'',
};

const reducer = (state= initialState, action)=>{
    console.log("@@@action",action);
    switch(action.type){
        case LOGIN:{
            console.log("@@@action->case:",LOGIN,state);
            return {
                //return state data or performe some filteration operations and reurn
                email:action.email,
                password:action.password
            }
        }
        break;
        default:
            return state;
    }
}

export default reducer;