import React from 'react'
import '../cards/Card.css'
import img5 from '../images/img5.png'

const Card = () => {
    return (
        <div className='cardsec'>
            <h1>Testimonials</h1>
        <div className='card-container'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Corey Korsgaard</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">jakob Aminoff</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Caria Press</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
