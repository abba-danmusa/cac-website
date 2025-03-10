import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="page-section">
      <div className="container position-relative">
        <div className="row"  data-aos="fade-right">
          <div className="col-lg-6">
            <div className="row mb-50">
              <div className="col-lg-10">
                <h2 className="section-caption mb-xs-10">Contact Us</h2>
                <h3 className="section-title mb-0">Let’s start the productive work.</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row mb-60 mb-sm-50">
              <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
                <div className="alt-features-item border-left mt-0">
                  <div className="alt-features-icon">
                    📧
                  </div>
                  <h4 className="alt-features-title">Say hello</h4>
                  <div className="alt-features-descr clearlinks">
                    <div>
                      <a href="mailto:cservice@cac.gov.ng">cservice@cac.gov.ng</a>
                    </div>
                    <div>+2348095521924</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-flex align-items-stretch">
                <div className="alt-features-item border-left mt-0">
                  <div className="alt-features-icon">📍</div>
                  <h4 className="alt-features-title">Location</h4>
                  <div className="alt-features-descr">
                    Plot 420, Tigris Crescent, Off Aguiyi Ironsi Street, Maitama, Abuja, Nigeria.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"  data-aos="fade-right">
          <div className="col-md-6 mb-sm-50">
          <form className="form contact-form pe-lg-5" id="contact_form">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name" pattern=".{3,100}" required aria-required="true"/>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email" pattern=".{5,100}" required aria-required="true"/>
                    </div>
                    
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="input-lg h-[130px] round form-control"  placeholder="Enter your message"></textarea>
            </div>
            
            <div className="row">
                <div className="col-lg-5">
                    
                    <div className="pt-20">
                        <button className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim" id="submit_btn" aria-controls="result">
                            <span>Send Message</span>
                        </button>
                    </div>   
                                                                
                </div>
                
                <div className="col-lg-7">
                    
                    <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                        <i className="icon-info size-16"></i>
                        All the fields are required. By sending the form you agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                    </div>
                    
                </div>
            </div>
            
            <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
            
        </form>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="map-boxed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8052881281906!2d7.4941055!3d9.081495499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4511cf3143%3A0xb80252234de0bb2!2sCAC%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1740666433785!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
