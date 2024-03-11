import  { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  });
  const navigate = useNavigate();

  const {loading, error, dispatch} = useContext(AuthContext);

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/')
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data})
    }
  }
  
  return (
    <div className='login'>
      <div className='lContainer'>
        <input type='text' placeholder='username' id='username' onChange={handleChange} className='lInput'/>
        <input type='password' placeholder='password' id='password' onChange={handleChange} className='lInput'/>
        <button className='lButton' disabled={loading} onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login