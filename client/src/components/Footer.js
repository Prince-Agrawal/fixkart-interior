import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <div className="footer-box">
                <img src="images/logo.svg" alt="logo" className="mb-4" />
                <h3 className="mb-3">Social Media</h3>
                <div className="social-icons d-flex gap-3">
                  <a href="https://www.instagram.com/fixkart_interio/" target="blank">
                    <img src="images/instagram.svg" alt="instagram" />
                  </a>
                  <a href="https://www.facebook.com/Fixkartinterio" target="blank">
                    <img src="images/facebook.svg" alt="facebook" />
                  </a>
                  <a href="https://x.com/Fixkart_interio" target="blank">
                    <img src="images/Twetter.svg" alt="Twetter" />
                  </a>
                  <a href="https://www.linkedin.com/company/fixkartinterio/" target="blank">
                    <img src="images/linkdien.svg" alt="linkdien" />
                  </a>
                  <a href="https://pin.it/7i8X0zFwA" target="blank">
                    <img src="images/pinterest.svg" alt="Twetter" />
                  </a>
                  <a href="https://youtube.com/@fixkartinteriointeriordesigner" target="blank">
                    <img src="images/youtube.svg" alt="Twetter" />
                  </a>
                </div>
                <div className="header_call_btn d-inline-flex"><img src="/images/call.svg" alt="Call Icon" /> +91 78782 41849</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-box border-start">
                <h3 className="mb-3">Company</h3>

                <ul className="Companylinks">
                  <li>
                    <Link to="/about" onClick={scrollToTop}>About us</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={scrollToTop}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={scrollToTop}>Contacts</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" onClick={scrollToTop}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={scrollToTop}>Our Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-box border-start">
                <h3 className="mb-3">Address</h3>

                <ul className="address">
                  <li>
                    <img src="images/address.svg" alt="Address" />
                    <a href="#">Branch 1 :  
                      Shop.No.1, Plot no B-114,Bhura Patel Marg, Gandhi Path W,
                      near Prince Palace, Vaishali Nagar, Jaipur, Rajasthan
                      302021
                    </a>
                  </li>
                  <li>
                    <img src="images/address.svg" alt="Address" />
                    <a href="#">
                    Branch 2 : 
                      Plot no. 222, Vinayak Enclave, Rawan Gate Rd, Shree Shyam
                      Vihar, Roop Nagar, Gokulpura, Kalwar, Jaipur, Rajasthan
                      302012{" "}
                    </a>
                  </li>
                  <li>
                    <img src="images/address.svg" alt="Address" />
                    <a href="#">
                    Branch 3 : 
                      G-22, Taxtile market, Bahu Bali Impex, Jagatpura Flyover,
                      Jaipur, Rajasthan 303806
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center copyright">
        Copyright © 2024 Modular Kitchen Jaipur
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
