import './newhotel.scss';
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';


const NewHotel = ({inputs, title}) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({})

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    
    setInfo(prev => (
      {
        ...prev,
        [e.target.id]: e.target.value
      }
    ))
  }

  const handleSubmit = async (e) => {

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
          <div className="left">
            <img 
              src={files 
                    ? URL.createObjectURL(files[0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"    
              } 
              alt=''
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input 
                  type="file"
                  id='file' 
                  multiple
                  style={{display: 'none'}}
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
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
              <button>Save</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewHotel
