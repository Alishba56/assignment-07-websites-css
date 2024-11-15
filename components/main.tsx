import React from 'react'
import Image from 'next/image'
import img from '@/images/img.png'

const main = () => {
  return (
    <div>
         <section className="Home">
      <div className="home-content">
        <h1>Your <br />Rental Journey</h1>
        <h3 className="home-content">Begins Here<span></span></h3>
        <p className="home-content">
          We Make Finding Rentals Easy, Effortless Search, Endless Choices
        </p>
        <button className="btn">Rent Now</button>
        <button className="btn2">Rent Your Place</button>
      </div>
      
       <Image
       src={img}
       alt="Home Image"
       className='home-img'
 />
    </section>
      
    </div>
  )
}

export default main
