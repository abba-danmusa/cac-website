import React from "react";

const AboutSection = () => {
  return (
    <section className="page-section" id="about">
                    <div className="container position-relative">
                    
                        <div className="row mb-60 mb-xs-30" >
                            
                            <div className="col-md-6" data-aos="fade-left">
                                <h2 className="section-caption mb-xs-10">Our Story</h2>
                                <h3 className="section-title mb-0"><span className="wow charsAnimIn" data-splitting="chars">Shaping a transparent, business-friendly nigeria</span></h3>
                            </div>
                            
                            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                                
                                <div className="decoration-2 d-none d-md-block" data-rellax-y data-rellax-speed="0.7" data-rellax-percentage="-0.2">
                                    <img src="images/decoration-2.svg" alt="" />
                                </div>
                                
                                <a href="/who" className="link-hover-anim underline align-middle" data-link-animate="y">Learn more about us <i className="mi-arrow-right size-18"></i></a>
                                
                            </div>
                            
                        </div>
                        
                        <div className="row wow fadeInUp" data-wow-delay="0.5s" >
                            
                            <div className="col-lg-6 mb-md-60" data-aos="zoom-in">
                                <div className="position-relative">
                                    
                                    <div className="position-relative overflow-hidden">
                                        <img src="/images/cac.png" className="image-fullwidth relative" alt="Image Description" />
                                    </div>
                                    
                                    <div className="decoration-1 d-none d-sm-block" data-rellax-y data-rellax-speed="1" data-rellax-percentage="0.1">
                                        <img src="/images/decoration-1.svg" alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-xl-5 offset-xl-1" data-aos="fade-right">
                                
                                <h4 className="h5">Our Mission</h4>
                                
                                <p className="text-gray">
                                    Deliver seamless and efficient business registration.<br/>
                                    Foster trust through transparency and innovation.<br/>
                                    Ensure regulatory compliance with global best practices.<br/>
                                    Empower businesses for economic growth and success.
                                </p>
                                
                                <h4 className="h5">Our Vision</h4>
                                
                                <p className="text-gray">
                                    To be a world-class business registry.<br/>
                                    Set the standard for corporate compliance.<br/>
                                    Simplify processes for entrepreneurs and investors.<br/>
                                    Drive Nigeria’s business ecosystem to excellence.
                                </p>
                                
                            </div>
                            
                        </div>
                    
                    </div>
                </section>
  );
};

export default AboutSection;
