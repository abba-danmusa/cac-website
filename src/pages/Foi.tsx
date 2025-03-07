import React from 'react'

const Foi = () => {
  return (
    <div className=' flex flex-col '>
      <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden" style={{ backgroundImage: 'url(images/hero.png)' }}>
        <div className="bg-shape-1 wow fadeIn">
          <img className="opacity-05" src="images/demo-corporate/bg-shape-1.svg" alt="" />
        </div>
        <div className="container position-relative pt-10 pt-sm-40 text-center">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="hs-title-9 mb-10">
                <span className="wow charsAnimIn" data-splitting="chars">
                  FOI
                </span>
              </h1>
              <p className="hs-descr mb-0 wow fadeIn" data-wow-delay="0.2s">
                Freedom of Information Act
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pb-0" id="services">
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50 wow fadeInUp" data-wow-offset="0">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <p className="section-descr mb-0">
                The Freedom of Information Act is an Act to make public records and information more freely available, provide for public access to public records and information, protect public records and information to the extent consistent with public interest and protection of personal privacy, protect serving public officers from adverse consequences of disclosing certain information without authorization and establish procedures for the achievement of those purposes and, for matters related therewith.
              </p>
            </div>
          </div>
        </div>

        <div className="" style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '2rem', padding: '4rem' }}>
          <a href="assests/Procurement-Plan-2020.pdf" target="_blank" className="">
            2020 Procurement Plan
          </a>
          <a href="assests/ADVERT-CAC-SERVICES-2020-FINAL.pdf" target="_blank" className="">
            EXPRESSION OF INTEREST: DESIGN, DEVELOPMENT & IMPLEMENTATION OF ENTERPRISE REGISTRY SOFTWARE AND PROVISION OF MANAGED DEDICATED INFRASTRUCTURE FOR THE HOSTING OF THE COMMISSION ONLINE SERVICES
          </a>
        </div>
      </section>

      <hr className="mt-0 mb-0" />
    </div>
  )
}

export default Foi