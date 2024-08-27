import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

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