import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/home_page/home_page'
import HomeView from './components/home_view/home_view'

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomeView />} /> */}
      <Route path="/" element={<HomeView />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="admissions" element={<h1>Admissions Page</h1>} />
        <Route path="academics" element={<h1>Academics Page</h1>} />
        <Route path="gallery" element={<h1>gallery Page</h1>} />
        <Route path="staff" element={<h1>staff Page</h1>} />
        <Route path="student" element={<h1>student Page</h1>} />
        <Route path="contact" element={<h1>contact Page</h1>} />
      </Route>

      <Route path="/student/login" element={<h1>STUDENT LOGIN PAGE</h1>} />
      <Route path="/staff/login" element={<h1>STUDENT LOGIN PAGE</h1>} />
      <Route path="/admin" element={<h1>STUDENT LOGIN PAGE</h1>} />
    </Routes>

  )
}

export default App