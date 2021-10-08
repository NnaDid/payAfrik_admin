import React from 'react'
import './WidgetSm.css'
import ProfilePix from '../../assets/profile.jpg'
import { Visibility } from '@material-ui/icons'

function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Users</span>
             <ul className="widgetSmList">
                 <li className="widgetSmListItem">
                      <img src={ProfilePix}  alt='proilePix' className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Igwe Kendo</span>
                        <span className="widgetSmPhoneNumber">0908876542</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                 </li> 
                 <li className="widgetSmListItem">
                      <img src={ProfilePix}  alt='proilePix' className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Igwe Kendo</span>
                        <span className="widgetSmPhoneNumber">0908876542</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                 </li> 
                 <li className="widgetSmListItem">
                      <img src={ProfilePix}  alt='proilePix' className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Igwe Kendo</span>
                        <span className="widgetSmPhoneNumber">0908876542</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                 </li> 
                 <li className="widgetSmListItem">
                      <img src={ProfilePix}  alt='proilePix' className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Igwe Kendo</span>
                        <span className="widgetSmPhoneNumber">0908876542</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                 </li> 
             </ul>
        </div>
    )
}

export default WidgetSm
