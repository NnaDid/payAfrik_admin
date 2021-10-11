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
                                <Link to="/services">
                                <Timeline className="sidebarIcon"/>
                                    Services
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/transactions">
                                   <TransferWithinAStation className="sidebarIcon" />
                                    Transactions
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/billers">
                                    <PaymentSharp className="sidebarIcon"/>
                                    Billers
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/smartmeter">
                                   <SettingsPower className="sidebarIcon"/>
                                    Smart Meter
                                </Link>
                            </li>
                        </ul>
                  </div>
 
                  <div className="sideBarMenu">
                      <h3 className="sedebarTitle">Notification</h3>
                        <ul className="sideBarList">
                            <li className="sidebarListItem">
                                <Link>
                                  <Mail  className="sidebarIcon"/>
                                    Mail
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="feedback">
                                  <Feedback className="sidebarIcon"/>
                                    Feedback
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/support">
                                        <MessageOutlined className="sidebarIcon" />
                                        Support
                                </Link>
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
                                <Link to="/admin">
                                    <MarkunreadMailbox  className="sidebarIcon"/>
                                     Admins
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                <Link to="/analytic">
                                    <Timeline className="sidebarIcon"/>
                                        Analytics
                                </Link>
                            </li>
                            <li className="sidebarListItem">
                                    <Link to="/report">
                                            <Report className="sidebarIcon" />
                                            Reports
                                    </Link>
                            </li> 
                        </ul>
                  </div>
 
              </div>

           <div className="versionContainer">
                <h2 className="version">PayAfrik Admin 1.0.0</h2>
           </div>
           
        </div>
    )
}

export default Sidebar
