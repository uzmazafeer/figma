import React from "react";
import "./customers.css";
import images1 from "../../public/image/image 14.png"
import images2 from "../../public/image/image 15.png"
import images3 from "../../public/image/image 16.png"
import images4 from "../../public/image/image 17.png"
import images5 from "../../public/image/image 18.png"
import images6 from "../../public/image/image 19.png"
const Customers = () => {
  return (
    <section className="customers">

      {/* Top badge */}
      <div className="customers-badge">
        OUR CUSTOMERS
      </div>
      <div>
        <h2>
          Trusted by 100,000 + <b>customers</b> in 90+ countries
        </h2>
      </div>
      <br />
      <br />

      {/* Logos */}
      <div className="customers-logos">
        <img src={images1} alt="Capgemini" />
        <img src={images2} alt="Yamaha" />
        <img src={images3} alt="Biocon" />
        <img src={images4} alt="Dell" />
        <img src={images5} alt="Birla" />
        <img src={images6} alt="Shell" />
      </div>

      {/* Bottom info */}
      <div className="customers-info">
        <span>✔ 18281</span>
        <span>✔ GDPR & CCPA</span>
        <span>✔ Leader @ G2</span>
      </div>

    </section>
  );
};

export default Customers;
