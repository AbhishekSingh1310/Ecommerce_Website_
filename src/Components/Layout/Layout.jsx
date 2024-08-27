import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='children'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout