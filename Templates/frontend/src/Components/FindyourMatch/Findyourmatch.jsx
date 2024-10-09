import React, { Fragment } from 'react'
import "./find.css"
import { Link } from 'react-router-dom'

const Findyourmatch = () => {
  return (
    <Fragment>
        <center><h1 className='heading'>Find Your Best Business Matchmaking !</h1></center>
        <div className='findcontainer'>
            <div className='findbox'>
            <Link to={"/buyerpage"} style={{textDecoration:"none"}}> <div className='findbtn' >Business Seeker</div></Link>   
            <Link to={"/sellerpage"} style={{textDecoration:"none"}}> <div className='findbtn' >Business Provider</div></Link>  
            </div>
        </div>
      
    </Fragment>
    
  )
}

export default Findyourmatch