import React from 'react'
import Image from 'next/image'
import img from '@/images/homes.png'
import img2 from '@/images/shops.png'
import img3 from '@/images/apartment..png'
import img4 from '@/images/bungalow.png'
import img5 from '@/images/cottages.png'
import img6 from '@/images/farmhouse.png'


const servies = () => {
  return (
    <div>
      <section className="">
      
        <h2 className='heading-ser'>  Services</h2>
        <div className="services-content">
        <p className='para'>
        Rent a car Service Pakistan provides cheap, hassle-free car rental service.
        </p>

        <div className='services-box'>
          
        <div className='box'>
          <h3>Homes</h3>
          <p>
          Detached structures built on their own lots, offering more privacy and often including a yard or garden. 
          </p>
          <Image
          className='services-img-1'
          src={img}
          alt="Home Image"
          />
        </div>
        <div className='box'>
          <h3>shops</h3>
          <p>
          Shops typically have a designated area to display products, 
          </p>
          <Image
          className='services-img-2'
          src={img2}
          alt="Shop Image"
          />
        </div>
        <div className='box'>
          <h3>apartments</h3>
          <p>
        Apartments are common in urban settings, offering amenities like gyms, pools, 
          </p>
          <Image
          className='services-img-3'
          src={img3}
          alt="Apartment Image"
          />
        </div>
        <div className='box'>
          <h3>bungalows</h3>
          <p>
          Most bungalows are one-story homes, though some may have a small loft or attic space.
          </p>
          <Image
          className='services-img-4'
          src={img4}
          alt="bungalow Image"
          />
        </div>
        <div className='box'>
          <h3>cottages</h3>
          <p>
          Small, charming homes usually located in rural or scenic areas, popular for their cozy, traditional feel.
          </p>
          <Image
          className='services-img-5'
          src={img5}
          alt="Home Image"
          />
        </div>
        <div className='box'>
          <h3>Farm houses</h3>
          <p>
          Spacious homes, often luxurious, located in scenic or farm house-like settings. 
          </p>
          <Image
          className='services-img-6'
          src={img6}
          alt="Home Image"
          />
        </div>
        </div>


      </div>
      </section>
      
    </div>
  )
}

export default servies
