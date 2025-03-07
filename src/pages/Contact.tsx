import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white flex flex-col '>
        <section
        className="page-section pb-100 pb-sm-60 bg-gray-light-1 parallax-5"
        style={{ backgroundImage: 'url(images/hero.png)' }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white"></div>
        <div className="container position-relative pt-50">
          <div className="text-center">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2
                  className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Contact Us
                </h2>
                <h1 className="hs-title-1 mb-0">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Say hello and let’s start the productive work.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mb-50">
                <div className="col-lg-10">
                  <h2 className="section-caption mb-xs-10">Contact Us</h2>
                  <h3 className="section-title mb-0">
                    <span className="wow charsAnimIn" data-splitting="chars">
                      Let’s start the productive work.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row mb-60 mb-sm-50">
                <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
                  <div
                    className="alt-features-item border-left mt-0 wow fadeScaleIn"
                    data-wow-delay=".3s"
                  >
                    <div className="alt-features-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                      </svg>
                      <div className="alt-features-icon-s">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                        </svg>
                      </div>
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
                  <div
                    className="alt-features-item border-left mt-0 wow fadeScaleIn"
                    data-wow-delay=".5s"
                  >
                    <div className="alt-features-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                      </svg>
                    </div>
                    <h4 className="alt-features-title">Location</h4>
                    <div className="alt-features-descr">
                      Plot 420, Tigris Crescent, Off Aguiyi Ironsi Street, Maitama,
                      Abuja, Nigeria.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row wow fadeInUp" data-wow-delay="0.5s">
            <div className="col-md-6 mb-sm-50">
              <form className="form contact-form pe-lg-5" id="contact_form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                  Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    style={{ height: '130px' }}
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col-lg-5">
                    <div className="pt-20">
                      <button
                        className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                      <i className="icon-info size-16"></i>
                      All the fields are required. By sending the form you agree
                      to the <a href="#">Terms & Conditions</a> and{' '}
                      <a href="#">Privacy Policy</a>.
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
                  width="600"
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

      <hr className="mt-0 mb-0" />

      <section className="page-section z-index-1">
        <div className="container position-relative">
          <div className="position-relative">
            <div
              className="decoration-21 d-none d-lg-block"
              data-rellax-y
              data-rellax-speed="0.75"
              data-rellax-percentage="0.5"
            >
              <img src="images/decoration-3.svg" alt="" />
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
              <h3 className="section-title mb-30">Frequently Asked Questions</h3>

              <p className="text-gray mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pulvinar vitae neque et porttitor. Integer non dapibus diam, ac
                eleifend lectus. In maximus ligula semper metus pellentesque
                mattis. Maecenas volutpat, diam enim sagittis quam.
              </p>
            </div>

            <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
              <dl className="accordion">
                <dt>
                  <a href="#">01. How do I get a refund?</a>
                </dt>
                <dd className="text-gray">
                  To request a refund, submit an application stating the reason
                  clearly. Include your name, phone number, account number, and
                  active email for communication. Attach proof of payment
                  (Remita Retrieval Reference), including all receipts for
                  multiple payments. A 5% administrative fee applies if the
                  refund is due to the applicant’s fault. Pre-incorporation and
                  post-incorporation refunds go to the Payer and Principal,
                  respectively. Send applications to audit@cac.gov.ng.
                </dd>
                <dt>
                  <a href="#">
                    02. What do I do if I made a mistake with my reserved name?
                  </a>
                </dt>
                <dd className="text-gray">
                  You may wait for the name approval to expire after 60 days or
                  you may proceed with the registration with the reserved name
                  and apply for a change of name after registration.
                </dd>
                <dt>
                  <a href="#">
                    03. Why do I find it difficult to upload picture, signature
                    or documents?
                  </a>
                </dt>
                <dd className="text-gray">
                  This usually occurs if the format and size of the
                  picture/signature/documents you want to upload are not in the
                  prescribed format. The format for pictures and signatures is
                  jpeg/PNG while the format for documents is PDF. The maximum
                  size for file upload is 5MB.
                </dd>
                <dt>
                  <a href="#">
                    04. What should I do if CAC asked me to my issued share
                    capital?
                  </a>
                </dt>
                <dd className="text-gray">
                  This happens where the company’s issued share capital is lower
                  than the prescribed issued share capital for the proposed
                  object(s). You may resolve this by either expunging the
                  specific object(s) or increasing the issued share capital to
                  meet the prescribed minimum issued share capital. Where the
                  issued share capital is increased to meet the prescribed
                  minimum issued share capital, filing fees and stamp duties
                  should be paid on the increase through remita.net and
                  stampduty.gov.ng respectively. After payment, receipts for
                  the payments should be uploaded as “OTHERS” under the upload
                  options.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
        </div>
  )
}

export default Contact