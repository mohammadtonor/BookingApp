import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const { data, loading, error, reFetch } = useFetch('/hotels/countByCitiy?cities=berlin,london,madrid')

  return (
    <div className="featured">
        {loading ? ("Loadung please wait"): (

        <>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/321013130.jpg?k=14a8d36bca8b8f2bde3ec8038fe8217db71c990e82ff39238ca167290522bde7&o=&hp=1"/>
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h3>{data[0]} properties</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/357661741.jpg?k=5021464a6f5067990b42204d07264d9bed52de0bf1af818a998115afe027e796&o=&hp=1"/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h3>{data[1]} properties</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/251956933.jpg?k=f188fb39d87d383775ec6f73398f2ace36f4fc968802276e6148c3fba5376927&o=&hp=1"/>
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h3>{data[2]} properties</h3>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default Featured