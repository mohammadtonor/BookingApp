import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format, set } from 'date-fns';

const Header = ({ type }) => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOIptions] = useState(false);
    const [options, setOptions]= useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOptions = (name, operation) => {
        setOptions((prev) => {
            return {
              ...prev,
              [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
          });
    }

  const  handleSearch = () => {
    navigate('/hotels', {state: { destination, date, options } })
  }

  return (
    <div className='header'>
        <div className={ type === 'list' ? "headerContainer listMode": "headerContainer"}>
            <div className='headerList'>
                <div className='active headerListItem'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stay</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flight</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rental</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attraction</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxis</span>
                </div>
            </div>
            {type !== 'list' && <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className='headerBtn'>Sign in / Register</button>
            
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input 
                            type='text'
                            placeholder='Where are you going?'
                            className='headerSearchInput'
                            onChange={e => setDestination(e.target.value)}
                        />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to
                        ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                        {openDate &&<DateRange
                            onChange={item => setDate([item.selection])}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span 
                            onClick={() => setOpenOIptions(!openOptions)}
                            className='headerSearchText'
                        >
                                {`${options.adult} adult . ${options.children} children . ${options.room} rooms`}
                        </span>
                        <div className={`options ${openOptions ? ' showOptions': 'hideOptions'}`}>
                            <div className='optionsItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionsContainer'>
                                    <button
                                        disabled={options.adult <= 1} 
                                        className='optionsCounterButton' onClick={() => handleOptions('adult', 'd')}>
                                        -
                                    </button>
                                    <span className='optionCounter'>{options.adult}</span>
                                    <button className='optionsCounterButton' onClick={() => handleOptions('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionsItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionsContainer'>
                                    <button
                                        disabled={options.children <= 1} 
                                        className='optionsCounterButton' 
                                        onClick={() => handleOptions('children', 'd')}>-</button>
                                    <span className='optionCounter'>{options.children}</span>
                                    <button className='optionsCounterButton' onClick={() => handleOptions('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionsItem'>
                                <span className='optionText'>Rooms</span>
                                <div className='optionsContainer'>
                                    <button
                                        disabled={options.room <= 1}
                                        className='optionsCounterButton' 
                                        onClick={() => handleOptions('room', 'd')}>-</button>
                                    <span className='optionCounter'>{options.room}</span>
                                    <button className='optionsCounterButton' onClick={() => handleOptions('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='headerSeachItem'>
                        <button onClick={handleSearch} className='headerBtn'>Search</button>
                    </div>
                    </div>
                    </>
                    }
        </div>
    </div>
  )
}

export default Header