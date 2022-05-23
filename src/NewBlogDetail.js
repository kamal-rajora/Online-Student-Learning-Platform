import React from 'react'
import Navbar from './Navbar'
import Detail from './Detail'
import Footer from './Footer'
import {Link} from "react-router-dom"

export default function NewBlogDetail() {
  return (
    <div>
        <Navbar></Navbar>

        <div class="container-fluid bg-primary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
            <h3 class="display-3 font-weight-bold text-white">Blog Detail</h3>
            <div class="d-inline-flex text-white">
                <Link to="/">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                </Link>
                <p class="m-0 px-2">/</p>
                <Link to="/blogdetails">
                <p class="m-0">Blog Detail</p>
                </Link>
            </div>
        </div>
    </div>
    <Detail></Detail>
    <Footer></Footer>
    <a href="#" class="btn btn-primary p-3 back-to-top"><i class="fa fa-angle-double-up"></i></a>

    </div>
  )
}
