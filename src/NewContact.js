import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function NewContact() {
  return (
    <div>
        <Navbar></Navbar>

        <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
            <h3 class="display-3 font-weight-bold text-white">Contact Us</h3>
            <div class="d-inline-flex text-white">
                <Link to="/">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                </Link>
                <p class="m-0 px-2">/</p>
                <Link to="/contact">
                <p class="m-0">Contact Us</p>
                </Link>
            </div>
        </div>
    </div>

        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}
