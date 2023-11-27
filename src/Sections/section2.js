import React from 'react'
import '../Sections/Section2.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import Card from '../cards/Card'

const Box3 = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card-box '>
              <div className=" d-flex card shadow-sm" style={{ width: "20rem" }}>
                <div className="card-body d-flex">
                  <img src={img1} className="card-img-top" alt="..." />

                  <div className='card-text'>
                    <h6>Jenny Wilson</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisinng tempora ....</p>

                  </div>
                </div>
              </div>
              <div className="card shadow-sm" style={{ width: "20rem" }} >
                <div className="card-body d-flex">
                  <img src={img1} className="card-img-top" alt="..." />
                  <div className='card-text'>
                    <h6>Jenny Wilson</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing quidem eos tempora ....</p>

                  </div>
                </div>
              </div>
              <div className="card shadow-sm" style={{ width: "20rem" }}>
                <div className="card-body d-flex">
                  <img src={img1} className="card-img-top" alt="..." />
                  <div className='card-text'>
                    <h6>Jenny Wilson</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing  quidem eos tempora ....</p>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='text2'>
              <div className='head'>
                <h1>Tropical Adventure</h1>
                <h2>For Students.</h2>
                <h4>Student Tropical Vacation: Relax and Recharge</h4>
              </div>
              <ul>
                <li>Lorem Ipsum dolorsit amet sit</li>
                <li>Masasa quis natydg sit quam</li>
                <li>eros non penlattet sit elit </li>
                <li>tartair id hdgsgtsg habitatei</li>
                <li>sed suspicios id in utilityb </li>
              </ul>
              <div className='btn'>
                <button>Expolore More</button>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div className='section2'>
        <div className='container2'>
          <div className='row'>
            <div className='col'>
              <div className='main-text'>
                <h5>Get 20% off for student</h5>
                <h1>Student discount available</h1>
                <h3>Get ready for some fun int the sun!</h3>
                <ul>
                  <li>Lorem Ipsum dolorsit amet sit</li>
                  <li>Masasa quis natydg sit quam</li>
                  <li>eros non penlattet sit elit </li>
                  <li>tartair id hdgsgtsg habitatei</li>
                  <li>sed suspicios id in utilityb </li>
                </ul>
                <div className='btn'>
                  <button>Expolore More</button>
                </div>
              </div>

            </div>
            <div className='col'>
              <div className='img2'>
                <img src={img2} alt="..." style={{ width: "400px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className='row'>
          <div className='col'>
            <div className='imgsec2'>
              <img src={img1} alt="" style={{ width: "400px" }} />
            </div>
          </div>
          <div className='col'>

            <div className='form shadow-sm'>
              <h1>Book Now</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, modi aperiam  </p>
              <div className='lower-form'>
                <div className='upper-input'>
                  <label htmlFor="text">CITY</label>
                  <div>
                    <input type="text" placeholder='placeholder' />
                  </div>
                </div>
                <div className='lower-input'>
                  <div class="lower-inp ">
                    <div class="row row-cols-2">
                      <div class="col">
                        <label htmlFor="">ARRIVAL</label>
                        <div>
                          <input type="text" placeholder='10 october' />
                        </div>
                      </div>
                      <div class="col">
                        <label htmlFor="">DEPARTURE</label>
                        <div>
                          <input type="text"placeholder='11 october' />
                        </div>
                      </div>
                      <div class="col">
                        <label htmlFor="">STAR</label>
                        <div>
                          <input type="text" />
                        </div>
                      </div>
                      <div class="col">
                        <label htmlFor="">ROOM</label>
                        <div>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='Cardsection'>
        <Card />
      </div>
      <div className='textSection'>
        <div className='heading'>
          <h1>Student Special: Discounted rates<div> on Tropical geteways</div></h1>
          <p>Lets embody your beaultiful ideas together ,simplify the <div>way you visiulize your next big things</div></p>
        </div>
        <div className='list d-flex'>
          <ul className='linkList d-flex'>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Sales and refund</li>
            <li>Legal</li>
            
            <li className='bold'>Privacy Policy</li>
            <li className='bold'>Terms of use</li>
            <li className='bold'>Sales and refund</li>
            <li className='bold'>Legal</li>
            


          </ul>
        </div>
      </div>
    </div>


  )
}

export default Box3
