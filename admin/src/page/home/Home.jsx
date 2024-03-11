import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/sidebar'
import List from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
     <Sidebar />
     <div className="homeContainer">
        <Navbar />
        <div  className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last previus title" aspect={2/1}/>
         </div>
         <div className="listcontainer">
           <div className="listTitle">Latest Transaction</div>
           <List />
         </div>
     </div>
    </div>
  )
}

export default Home