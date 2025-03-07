import AboutSection from '@/components/AboutSection'
import FAQSection from '@/components/FAQSection'
import KeyAdvantages from '@/components/KeyAdvantages'
import TestimonialsSection from '@/components/TestimonialsSection'
import React from 'react'

const Who = () => {
  return (
   <div className="flex flex-col">
    <section className="page-section pt-0 pb-0" id="about">
        <div className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: 'url(images/hero.png)' }}>
          <div className="container position-relative pt-50 pb-100 pb-sm-20">
            {/* Section Content */}
            <div className="text-center">
              <div className="row">
                {/* Page Title */}
                <div className="col-md-8 offset-md-2">
                  <h2 className="section-caption-border mb-30 mb-xs-20 wow fadeInUp" data-wow-duration="1.2s">
                    About the CAC
                  </h2>
                  <h1 className="hs-title-1 mb-30">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      Welcome to Corporate Affairs Commission
                    </span>
                  </h1>
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <p className="section-descr mb-0 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1.2s">
                        Where business registration is seamless, transparent, and efficient.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Page Title */}
              </div>
            </div>
            {/* End Section Content */}
          </div>
        </div>

        <div className="page-section pt-0">
          <div className="container">
            <div className="mt-n120 mt-sm-n60 overflow-hidden">
              <img
                src="images/about-us-hero-2.png"
                style={{ width: '100%', height: '35rem' }}
                alt="Image Description"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
                data-wow-offset="0"
              />
            </div>
          </div>
        </div>
      </section>
        <hr className="mt-0 mb-0"/>
    <AboutSection />
    <KeyAdvantages />
    <TestimonialsSection />
    <FAQSection   />
      <hr className="mt-0 mb-0"/>
      <section className="page-section">
      <div className="container position-relative">
        {/* Decoration */}
        <div className="decoration-4 d-none d-md-block" data-rellax-y data-rellax-speed="-0.5" data-rellax-percentage=".7">
          <img src="images/decoration-2.svg" alt="" />
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 mb-md-60 mb-xs-30 d-flex align-items-center">
            <div className="wow fadeInUp" data-wow-duration="1.2s" data-wow-offset="205">
              <div className="row">
                <div className="col-lg-10">
                  <h2 className="section-title mb-60 mb-sm-30">Seamless Registration</h2>
                </div>
              </div>

              {/* Features Grid */}
              <div className="row alt-features-grid">
                {[
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    ),
                    title: "Fast and Efficient",
                    description: "Complete your CAC registration quickly and without unnecessary delays.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l2.59-2.58L14 13l-4 4z" />
                      </svg>
                    ),
                    title: "Expert Guidance",
                    description: "Receive professional support and guidance throughout the entire registration process.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                      </svg>
                    ),
                    title: "Document Assistance",
                    description: "We assist with the preparation and submission of all necessary documents.",
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    ),
                    title: "Complete Compliance",
                    description: "Ensure your business is fully compliant with all CAC regulations.",
                  },
                ].map((feature, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="alt-features-item">
                      <div className="alt-features-icon">{feature.icon}</div>
                      <h3 className="alt-features-title">{feature.title}</h3>
                      <div className="alt-features-descr">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex align-items-start">
            <div className="call-action-3-images mt-xs-0 text-end">
              {/* Image 1 */}
              <div className="call-action-3-image-1">
                <img
                  src="images/pathway-2.png"
                  style={{ width: '100%', objectFit: 'contain' }}
                  alt="Business Growth"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>

              {/* Image 2 */}
              <div className="call-action-3-image-2-wrap d-flex align-items-center">
                <div className="call-action-3-image-2" data-rellax-y data-rellax-speed="0.85" data-rellax-percentage="0.5">
                  <img
                    src="images/pathway-1.png"
                    style={{ width: '100%', objectFit: 'contain' }}
                    alt="CAC Registration Process"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="205"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>




   </div>
  )
}

export default Who