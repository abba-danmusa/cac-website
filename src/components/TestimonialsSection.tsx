const TestimonialsSection = () => {
    return (
        <section className="page-section pt-0 pb-0" data-aos="zoom-in">
        <div className="container position-relative">
          <div className="pt-80 pb-80 pt-sm-70 pb-sm-70 px-4 bg-gray-light-1">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 wow fadeInUp">
                {/* Section Title */}
                <div className="row">
                  <div className="col-md-10 offset-md-1 text-center">
                    <h2 className="section-title mb-70 mb-sm-40">
                      Trusted by <span className="mark-decoration-1">Thousands</span> of Nigerian Businesses.
                    </h2>
                  </div>
                </div>
  
                {/* Testimonials Slider */}
                <div className="testimonials-slider-1 pb-xs-80">
                  {[
                    {
                      quote:
                        '"Registering my business through this platform was incredibly smooth. The process was clear, and the support team was very responsive. I highly recommend their services to any Nigerian entrepreneur."',
                      name: 'Chukwuemeka Obi',
                      role: 'Small Business Owner, Lagos',
                      image: 'images/small-logo.png',
                      alt: 'Business Owner Testimonial',
                    },
                    {
                      quote:
                        '"I was initially overwhelmed by the CAC registration process, but this website made it so much easier. The guidance and resources provided were invaluable. My business is now officially registered, thanks to them!"',
                      name: 'Aisha Musa',
                      role: 'Startup Founder, Abuja',
                      image: 'images/small-logo.png',
                      alt: 'Startup Founder Testimonial',
                    },
                    {
                      quote:
                        '"The customer service was excellent. They answered all my questions promptly and helped me navigate the registration process efficiently. This is a reliable and trustworthy platform for CAC registration."',
                      name: 'Adeola Adebayo',
                      role: 'Entrepreneur, Port Harcourt',
                      image: 'images/small-logo.png',
                      alt: 'Entrepreneur Testimonial',
                    },
                  ].map((testimonial, index) => (
                    <div key={index}>
                      <blockquote className="mb-0">
                        {/* Blockquote Icon */}
                        <div className="blockquote-icon" aria-hidden="true">
                          ”
                        </div>
  
                        {/* Testimonial Text */}
                        <p>{testimonial.quote}</p>
  
                        {/* Section Line */}
                        <div className="section-line mt-40"></div>
  
                        {/* Testimonial Author */}
                        <footer className="ts1-author mt-20 clearfix">
                          <div className="ts1-author-img float-start">
                            <img
                              className="rounded-circle"
                              width="44"
                              height="44"
                              src={testimonial.image}
                              alt={testimonial.alt}
                            />
                          </div>
                          <div>
                            {testimonial.name}
                            <div className="small">{testimonial.role}</div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  export default TestimonialsSection;
  