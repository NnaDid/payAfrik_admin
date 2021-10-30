import { AUTH_ADMIN_USER, LOGOUT_ADMIN_USER } from "../types";

const AdminReducer = (state,action)=>{
        switch(action.type){
            case AUTH_ADMIN_USER:
                return{
                    ...state,
                    isLoggedIn: state.isLoggedIn,
                    
                }
                
                case LOGOUT_ADMIN_USER:
                    return {

                    }

                default:
                    return state
        }
}