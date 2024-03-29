import { Link } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
        <img
            className='siImg'
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
             alt=""
         />
         <div className="siDesc">
            <h1 className="siTitle">{item.title}</h1>
            <span className="siDistance">{item.distance}m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
         </div>
         <div className="siDetails">
            {item.rating && 
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>}
            <div className="siDetailTaxes">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Include taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                    <button className='siCheckButton'>See Availablity</button>
                </Link>
            </div>
         </div>
    </div>
  )
}

export default SearchItem