import React from 'react'
import '../Sections/Section1.css'
import img3 from '../images/img3.png'


const Section1 = () => {
  return (
    <div>
     
    <div className="container-sec">
        <div className="left">
            <h6>Discover the beauty of the tropics</h6>
            <h1><span>Tropical Destinations</span>
                For Student</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam temporibus consequuntur dolorem consectetur esse sapiente explicabo eveniet pariatur nemo modi 
                 </p>

            <button className="btn">
                sign up
            </button>
            <div className="hollow-circle"></div>
           


        </div>
        <div className="right">
            <img src={img3} alt="img"/>
       
        </div>
    </div>

    </div>
  )
}

export default Section1
