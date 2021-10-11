import React from 'react';
import './topbar.css';
import { Lock} from '@material-ui/icons';
import Profile from '../../assets/profile.jpg';
import Logo from '../../assets/logo.png'
// NotificationsNone, Language, Settings,
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft"> 
                    <span className="logo">
                       <img src={Logo} alt="" className="payAfrik" />
                    </span>
                </div>
                <div className="topRight"> 
                        {/* <div className="topbarIconContainer">
                             <NotificationsNone />
                             <span className="topIconBadge">2</span>
                        
                        </div>
                        <div className="topbarIconContainer">
                             <Language /> 
                             <span className="topIconBadge">2</span> 
                        </div> */}

                        <div className="topbarIconContainer">
                             <Lock className="logout"/> 
                       </div>

                        <img src={Profile} alt="" className="topAvartar" />

                 </div>
        
            </div>
        </div>
    )
}

export default Topbar
