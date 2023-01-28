import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/footer'
import Header from '../shared/header/header'

const HomeView = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default HomeView