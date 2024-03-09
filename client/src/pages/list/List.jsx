import React, { useContext, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from './../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext'

const List = () => {
  const location = useLocation();
  const { city, dates, options } = useContext(SearchContext);
  console.log(city);
  const [destination, setDestination ] = useState(dates);
  //const [dates, setDates] = useState(location.state.date || [new Date(), new Date()]);
  const [openDate, setOpenDate] = useState(false);
 // const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const {data, loading, error, reFetch} = useFetch(`/hotels?city=${city || 'berlin' }&max=${max || 999}&min=${min || 9}`)

  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type='text' value={city} onChange={e => setDestination(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Check In</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0]?.startDate, 'MM/dd/yyyy')} to
               ${format(dates[0]?.endDate, 'MM/dd/yyyy')}`}</span>
               {openDate && <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />}
            </div>
            <div className="lsItem lsOptions">
              <label>Options</label>
              <div className='lsoptionItem'>
                <span className='lsOptionText' >Min price <small>per night</small></span>
                <input type='number' value={min} onChange={e  => setMin(e.target.value)} className='lsOptionInput' />
              </div>
              <div className='lsoptionItem'>
                <span className='lsOptionText' >Max price <small>per night</small></span>
                <input type='number' value={min} onChange={e  => setMax(e.target.value)} className='lsOptionInput' />
              </div>
              <div className='lsoptionItem'>
                <span className='lsOptionText'>Adult</span>
                <input type='number' value={options.adult}  min={1} className='lsOptionInput' />
              </div>
              <div className='lsoptionItem'>
                <span className='lsOptionText'>Children</span>
                <input type='number' value={options.children} min={0} className='lsOptionInput' />
              </div>
              <div className='lsoptionItem'>
                <span className='lsOptionText'>Room</span>
                <input type='number' value={options.room} min={1} className='lsOptionInput' />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? ("Loading...") : <>
              {data.map(item => (<SearchItem key={item._id} item={item}/>))}
            </>}
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default List