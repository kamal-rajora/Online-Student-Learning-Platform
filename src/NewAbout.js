import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Facilities from "./Facilities"
import Teamstart from './Teamstart'
import Footer from "./Footer"

export default function NewAbout() {
  return (
    <div>
        <Navbar></Navbar>
        
    <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
            <h3 class="display-3 font-weight-bold text-white">About Us</h3>
            <div class="d-inline-flex text-white">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <p class="m-0 px-2">/</p>
                <p class="m-0">About Us</p>
            </div>
        </div>
    </div>
    
    <About></About>
    <Facilities></Facilities>
    <Teamstart></Teamstart>
    <Footer></Footer>
    </div>
  )
}
