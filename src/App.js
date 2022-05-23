import React from 'react'
import Navbar from './Navbar'
import Facilities from './Facilities'
import About from './About'
import Class from './Class'
import Registrationstart from './Registrationstart'
import Teamstart from './Teamstart'
import Testimonial from './Testimonial'
import Blog from "./Blog"
import Footer from './Footer'

export default function App() {
    
  return (

    // <!-- Header Start -->
    <div>
        <Navbar></Navbar>
     
    <div class="container-fluid bg-primary px-0 px-md-5 mb-5">
        <div class="row align-items-center px-3">
            <div class="col-lg-6 text-center text-lg-left">
                <h4 class="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
                <h1 class="display-3 font-weight-bold text-white">New Approach to Kids Education</h1>
                <p class="text-white mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
                    Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
                    lorem dolore sed stet et est justo dolore.</p>
                <a href="" class="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <img class="img-fluid mt-5" src="img/header.png" alt=""/>
            </div>
        </div>
    </div>
    
    <Facilities></Facilities>
    <About></About>
    <Class></Class>
    <Registrationstart></Registrationstart>
    <Teamstart></Teamstart>
    <Testimonial></Testimonial>
    <Blog></Blog>
    <Footer></Footer>
     </div>
    
     /* <!-- Header End --> */
  )
}
