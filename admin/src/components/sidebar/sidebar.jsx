import './sidebar.scss';
import {Link} from 'react-router-dom'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to={'/'}>
                <span className='logo'>Logo admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAINS</p>
                    <li>
                        <Link to={'/'}>
                            <DashboardIcon className='icon'/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                <li>
                    <Link to={'/users'}>
                        <PermIdentityIcon className='icon'/>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/hotels'}>
                        <StoreIcon className='icon'/>
                        <span>Hotels</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/rooms'}>
                        <CreditCardIcon className='icon'/>
                        <span>Rooms</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/rooms'}>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </Link>
                </li>
                <p className="title">USEFULL</p>
                <li>
                    <InsertChartIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">Service</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span className='maxWidth'>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">User</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>LogOut</span>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
            <div className='colorOptions' onClick={() => dispatch({type: "LIGHT" })}></div>
            <div className='colorOptions' onClick={() => dispatch({type: "DARK" })}></div>
        </div>
    </div>
  )
}

export default Sidebar;