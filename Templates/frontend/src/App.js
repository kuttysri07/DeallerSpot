import React, { Fragment, useEffect, useState } from 'react'
import {ToastContainer}from "react-toastify"
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Findyourmatch from './Components/FindyourMatch/Findyourmatch';
import About from './Components/About/About';
import Enquiry from './Components/Enquiry/Enquiry';
import Contact from './Components/Contact/Contact';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Buyerpage from './Components/Buyerpage/Buyerpage';
import Sellerpage from './Components/Sellerpage/Sellerpage';
import From from './Components/Form/Form';
import Sellerform from './Components/Form/Sellerform';
import SignupLogin from './Components/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';
import Franchisepage from './Components/FranchisePage/Franchisepage';



const App = () => {

  const [isLogin ,setIsLogin] = useState(false);

  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 3000);
  }, []);

  if (loading) {
    return <div className='loader'></div>; 
  }

  return (


  <BrowserRouter>
  
  
    <Routes>
    
          <Route path='/' element={
            <Fragment>
            <Nav />
            <Home />
            <Findyourmatch/>
            <About/>
            <Enquiry />
            <Contact />
           
          </Fragment>  }>
          </Route>
          <Route path='/buyerpage' element={<Buyerpage/>}></Route>
          <Route path='/sellerpage' element={<Sellerpage/>}></Route>
          <Route path='/franchisepage' element={isLogin ? <Franchisepage/> : ""}></Route>
          <Route path='/form/buyer' element={  <From /> }></Route>
          <Route path='/form/seller' element={<Sellerform />}></Route>
          <Route path='/login/:role' element={<SignupLogin isLogin={isLogin} setIsLogin={setIsLogin} />}></Route>
         
        
    </Routes>   
    <ToastContainer />
</BrowserRouter>

   
  )
}

export default App