import React from 'react'

const Resources = () => {
  return (
    <div> <section className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: 'url(images/hero.png)' }} id="home">
    <div className="container position-relative pt-30 pt-sm-50">
      {/* Section Content */}
      <div className="text-center">
        <div className="row">
          {/* Page Title */}
          <div className="col-md-8 offset-md-2">
            <h1 className="hs-title-1 mb-20">
              <span className="wow charsAnimIn" data-splitting="chars">
                Resources
              </span>
            </h1>
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <p className="section-descr mb-0 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1.2s">
                  Where every detail counts, our work stands out.
                </p>
              </div>
            </div>
          </div>
          {/* End Page Title */}
        </div>
      </div>
      {/* End Section Content */}
    </div>
  </section>
  {/* End Header Section */}

  {/* Portfolio Section */}
  <section className="page-section" id="portfolio">
    <div className="container">
      {/* Works Filter */}
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        <a href="#" className="filter active" role="button" aria-pressed="true" data-filter="*">
          All works
        </a>
        <a href="#development" className="filter" role="button" aria-pressed="false" data-filter=".development">
          Development
        </a>
      </div>
      {/* End Works Filter */}

      {/* Works Grid */}
      <ul className="works-grid work-grid-gut-lg masonry" id="work-grid">
        {/* Work Items */}
        {[
          {
            type: 'development',
            link: 'assests/Legal_Persons_Legal_Arrangements_NIRA_report_2022.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: '2022 National Inherent Risk Assessment (NIRA) of Legal Persons & Legal Arrangements in Nigeria',
          },
          {
            type: 'branding design',
            link: 'main-portfolio-single-1.html',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'Publication of Nigeria NIRA reports on Money Laundering, Terrorist Financing, Proliferation Financing, Legal Persons & Legal Arrangements and Money Laundering & Terrorist Financing in the Extractive Sector',
          },
          {
            type: 'branding',
            link: 'assests/PSC-Regulations-2022.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'PERSONS WITH SIGNIFICANT CONTROL REGULATIONS, 2022',
          },
          {
            type: 'design development',
            link: 'assests/CAMA-NOTE-BOOK-FULL-VERSION.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'CAMA 2020',
          },
          {
            type: 'design',
            link: 'main-portfolio-single-1.html',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'Service Charter',
          },
          {
            type: 'design branding',
            link: 'assests/PSC-Regulations-2022.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'Companies Regulations 2021',
          },
          {
            type: 'design development',
            link: 'assests/Insolvency-Regulation-2022-PDF-Gazette.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'Insolvency Regulations 2022',
          },
          {
            type: 'design',
            link: 'assests/Corporate-Affairs-Commission-Operations-Checklists-2022.pdf',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3GFHpTSJAugjf7CIRtr0GafETQkrx1CZTw&s',
            title: 'Operations Checklists 2022',
          },
        ].map((work, index) => (
          <li className={`work-item ${index === 0 || index === 2 ? 'mt-90 mt-md-0' : ''} mix ${work.type}`} key={index}>
            <a href={work.link} target="_blank" className="work-ext-link">
              <div className="work-img">
                <div className="work-img-bg wow-p scalexIn"></div>
                <img src={work.image} alt="Work Description" className="wow-p fadeIn" data-wow-delay="1s" />
              </div>
              <div className="work-intro text-start">
                <h3 className="work-title">{work.title}</h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {/* End Works Grid */}
    </div>
  </section>
  {/* End Portfolio Section */}

  {/* Divider */}
  <hr className="mt-0 mb-0" />
  {/* End Divider */}

  {/* Call Action Section */}
  <section className="page-section">
    <div className="container position-relative">
      {/* Decorative Waves */}
      <div className="position-relative">
        <div className="decoration-21 d-none d-lg-block" data-rellax-y data-rellax-speed="0.7" data-rellax-percentage="0.5">
          <img src="images/decoration-3.svg" alt="" />
        </div>
      </div>
      {/* End Decorative Waves */}

      <div className="row text-center wow fadeInUp">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p className="section-descr mb-50 mb-sm-30">
            From pre-incorporation to post-incorporation, we provide comprehensive CAC solutions that drive business growth and success.
          </p>
          <div className="local-scroll">
            <a href="/main-pages-contact-1.html" className="btn btn-mod btn-large btn-round btn-hover-anim">
              <span>Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Call Action Section */}
</div>
  )
}

export default Resources