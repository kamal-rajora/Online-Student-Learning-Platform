import React from 'react'
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import App from './App'
import NewClass from './NewClass'
import NewAbout from './NewAbout'
import NewGallery from './NewGallery'
import NewBlogGrid from "./NewBlogGrid"
import NewTeachers from './NewTeachers'
import NewBlogDetail from './NewBlogDetail'
import NewContact from './NewContact'

export default function Path() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App></App>}></Route>
            <Route path="/about" element={<NewAbout></NewAbout>}></Route> 
            <Route path="/class" element={<NewClass></NewClass>}></Route>
            <Route path="/teacher" element={<NewTeachers></NewTeachers>}></Route>
            <Route path="/gallery" element={<NewGallery></NewGallery>}></Route>
            <Route path="/bloggrid" element={<NewBlogGrid></NewBlogGrid>}></Route>
            <Route path="/blogdetails" element={<NewBlogDetail></NewBlogDetail>}></Route>
            
            <Route path="/contact" element={<NewContact></NewContact>}></Route>
            

            
            
        </Routes>
    </Router>
  )
}
