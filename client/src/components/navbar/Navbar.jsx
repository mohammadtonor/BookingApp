import { useContext } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <Link to={'/'}>
              <span className='logo'>lamabooking</span>
            </Link>
            <div className='navItems'>
            {user.username ? user.username :<>
              <button className='navButton'>Register</button>
                <Link to={'/login'}><button className='navButton'>Login</button></Link>
            </>}
            </div>
        </div>
    </div>
  )
}

export default Navbar