import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './components/home_view/home_page/home_page'
import HomeView from './components/home_view/home_view'
import AboutPage from './components/home_view/about_page/about_page'
import AdmissionsPage from './components/home_view/admissions_page/admissions_page'
import AcademicsPage from './components/home_view/academics_page/academics_page'
import GalleryPage from './components/home_view/gallery_page/gallery_page'
import StaffPage from './components/home_view/staff_page/staff_page'
import StudentPage from './components/home_view/student_page/student_page'
import ContactPage from './components/home_view/contact_page/contact_page'
import ErrorPage from './components/home_view/error_page/error_page'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="student" element={<StudentPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="/student/login" element={<h1>STUDENT LOGIN PAGE</h1>} />
      <Route path="/staff/login" element={<h1>STUDENT LOGIN PAGE</h1>} />
      <Route path="/admin" element={<h1>STUDENT LOGIN PAGE</h1>} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>

  )
}

export default App