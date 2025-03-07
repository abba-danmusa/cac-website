import React from 'react';

function Footer() {
  return (
    <footer className="page-section footer bg-gray-light-1 pb-30">
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <div className="mb-30">
              <img src="/images/logo.png" width="205" height="34" alt="Your Company Logo" />
            </div>
            <h3 className="mt-4 text-lg text-black md:text-xl lg:text-2xl font-bold">
              Corporate Headquarters
            </h3>
            <p className="lg:text-sm md:text-xs text-xs text-black  md:text-left">
              Plot 420, Tigris Crescent, <br /> Off Aguiyi Ironsi Street, <br /> Maitama, Abuja, Nigeria.
            </p>
            <div className="clearlinks">
              <strong>T.</strong> <a href="tel:+2348095521924">+2348095521924</a>
            </div>
            <div className="clearlinks">
              <strong>E.</strong> <a href="mailto:cservice@cac.gov.ng">cservice@cac.gov.ng</a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  <li><a href="/who">About us</a></li>
                  <li><a href="/news">News</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/resources">Resources</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      <i className="fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      <i className="fa-youtube"></i> Youtube
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      <i className="fa-pinterest"></i> Pinterest
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      <i className="fa-linkedin"></i> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal & Press</h3>
                <ul className="fw-menu clearlist">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Presskit</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© Copyright 2019 - 2024</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>CAC Corporate Affairs Commission</b>
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top">
                <i className="mi-arrow-up size-24"></i>
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;