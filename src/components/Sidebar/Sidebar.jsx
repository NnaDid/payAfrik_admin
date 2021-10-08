import React from 'react'
import './Sidebar.css'
import {Archive, Feedback, LineStyle, Mail, MarkunreadMailbox, MessageOutlined, PaymentSharp, Person, Report, SettingsPower, Timeline, TransferWithinAStation, TrendingUp} from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
              <div className="sidebarWrapper">
                  <div className="sideBarMenu">
                      <h3 className="sedebarTitle">Dashboard</h3>
                        <ul className="sideBarList">
                            <li className="sidebarListItem active">
                                 <Link to="/">
                                  <LineStyle  className="sidebarIcon"/>
                                    Home
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analystics
                            </li>
                       
                            <li className="sidebarListItem">
                                 <Link to ="/sales">  
                                   <TrendingUp className="sidebarIcon" />
                                    Sales
                                 </Link>
                                
                            </li> 
                        
                        </ul>
                  </div>
 
                  <div className="sideBarMenu">
                      <h3 className="sedebarTitle">Quick Menu</h3>
                        <ul className="sideBarList">
                            <li className="sidebarListItem">
                                    <Link to ="/users">  
                                      <Person  className="sidebarIcon"/>
                                       Users 
                                    </Link>

                            </li>
                            <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Services
                            </li>
                            <li className="sidebarListItem">
                                    <TransferWithinAStation className="sidebarIcon" />
                                    Transactions
                            </li>
                            <li className="sidebarListItem">
                                    <PaymentSharp className="sidebarIcon"/>
                                    Billers
                            </li>
                            <li className="sidebarListItem">
                                    <SettingsPower className="sidebarIcon"/>
                                    Smart Meter
                            </li>
                        </ul>
                  </div>
 
                  <div className="sideBarMenu">
                      <h3 className="sedebarTitle">Notification</h3>
                        <ul className="sideBarList">
                            <li className="sidebarListItem">
                                    <Mail  className="sidebarIcon"/>
                                    Mail
                            </li>
                            <li className="sidebarListItem">
                                    <Feedback className="sidebarIcon"/>
                                    Feedback
                            </li>
                            <li className="sidebarListItem">
                                    <MessageOutlined className="sidebarIcon" />
                                    Support
                            </li> 
                            <li className="sidebarListItem">
                                    <Archive className="sidebarIcon" />
                                    App Logs
                            </li> 
                        </ul>
                  </div>
 
                  <div className="sideBarMenu">
                      <h3 className="sedebarTitle">Staff</h3>
                        <ul className="sideBarList">
                            <li className="sidebarListItem">
                                    <MarkunreadMailbox  className="sidebarIcon"/>
                                    Manage
                            </li>
                            <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analytics
                            </li>
                            <li className="sidebarListItem">
                                    <Report className="sidebarIcon" />
                                    Reports
                            </li> 
                        </ul>
                  </div>
 
              </div>
        </div>
    )
}

export default Sidebar
