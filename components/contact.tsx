import React from 'react'

const page = () => {
  return (
    <div>
        
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact me
      </h2>

      <form action="" className='info'>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone number" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>

        <div className="input-group-2">
          <textarea
           name="message"
           required
           rows={10}
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
      
    </div>
  )
}

export default page
