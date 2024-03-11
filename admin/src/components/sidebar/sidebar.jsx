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


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Logo admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAINS</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <Link to={'/users'}>
                        <PermIdentityIcon className='icon'/>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <StoreIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
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
            <div className='colorOptions'></div>
            <div className='colorOptions'></div>
            <div className='colorOptions'></div>
        </div>
    </div>
  )
}

export default Sidebar;