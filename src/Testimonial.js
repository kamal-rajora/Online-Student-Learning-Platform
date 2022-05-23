import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonial() {
  return (
    <div class="container-fluid py-5">
    <div class="container p-0">
        <div class="text-center pb-2">
            <p class="section-title px-5"><span class="px-2">Testimonial</span></p>
            <h1 class="mb-4">What Parents Say!</h1>
        </div>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
        
    </div>
</div>
  )
  {/* <!-- Testimonial End --> */}
}
