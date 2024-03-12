import './newRoom.scss';
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';


const NewRoom = ({inputs, title}) => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState({});
  const [rooms, setRooms] = useState("");

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map(room => ({number: room}));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers })
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                    id={input.id}
                    type={input.type} 
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                  <label>Room's Numbers</label>
                  <textarea 
                    placeholder={"Give a comma between room numbers"}
                    onChange={(e) => setRooms(e.target.value)}
                  />
                </div>
              <div className="formInput">
                  <label>Chose a hotel</label>
                  <select id='hotelId' onChange={(e) => setHotelId(e.target.value)}>
                    {loading ? "Loading..." : data && data.map((hotel) => (
                      <option value={hotel._id} key={hotel._id}>{hotel.name}</option>
                    ))}
                  </select>
              </div>
              <button onClick={handleSubmit}>Save</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewRoom
