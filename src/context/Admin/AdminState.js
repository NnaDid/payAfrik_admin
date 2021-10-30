import { useReducer } from "react";
import AdminContext from './AdminContext'
import AdminReducer from './AdminContext'
import  { AUTH_ADMIN_USER, LOGOUT_ADMIN_USER} from '../types'

const AdminState = ({children})=>{

     const initialState ={
         isLoggedIn:false,
         adminToken:"",
     };

     const [state, dispatch] = useReducer(AdminReducer,initialState);
    
     const Login =(token)=>{
            dispatch({type:AUTH_ADMIN_USER,payload:token});
     };

     const LogOut = (token)=>{
        dispatch({
            type: LOGOUT_ADMIN_USER,
            payload:token,
        });
     }

        <AdminContext.Provider value ={{
            isLoggedIn:state.isLoggedIn,
            adminToken:state.adminToken,
            Login,
            LogOut,
        }}>
            {children}
        </AdminContext.Provider>
}

export default AdminState;