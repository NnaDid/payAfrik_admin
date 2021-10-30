
export const getAdminUSer = ()=>{
    const adminUser = sessionStorage.getItem("paf_ADMIN");
    if(adminUser){
        return JSON.parse(adminUser);
    }else{
        return null;
    }
}

export const getAminUserToken =()=>{
    return sessionStorage.getItem("paf_ADMIN_AUTH_token");
}

export const getAminRefreshToken =()=>{
    return sessionStorage.getItem("pafRefresh_token");
}

export const setAdminUserSession = (token, AdminUser)=>{
    sessionStorage.setItem("paf_ADMIN_AUTH_token",token)
    sessionStorage.setItem("paf_ADMIN",JSON.stringify(AdminUser))
}

export const removeAdminUSerSesion =()=>{
     sessionStorage.removeItem("adminToken");
     sessionStorage.removeItem("paf_ADMIN");
}

export const isLoggedIn= ()=>{
    if(getAminUserToken!==null || getAdminUSer!==null){ 
        return false;
    }else{
        return true;
    }
}