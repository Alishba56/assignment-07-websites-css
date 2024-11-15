import React from "react";
import Image from "next/image";
import img from "@/images/img2.png";

const page = () => {
  return (
    <div className="">
      <h1 className="heading-about">About us</h1>
      <section className="second">
        <Image className="second-img" src={img} alt="Second Image" />
        <div className="second-content">
          <h2>
            Begin <br />
            your awesome <br />
            journey
          </h2>
          <p>
            Looking for the perfect home to rent? Our user-friendly house rental
            website makes your search a breeze. Browse through a diverse range
            of listings, From cozy apartments to spacious family houses. <br />{" "}
            With detailed descriptions, vivid photos, and handy filters, finding
            your ideal rental is just a click away.
          </p>
          <button className="btn-about">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default page;
