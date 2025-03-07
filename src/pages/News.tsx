import React from 'react'

const News = () => {
  return (
    <>
      {/* Header Section */}
      <section className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: 'url(images/hero.png)' }} id="blog">
        <div className="container position-relative pt-30 pt-sm-50">
          {/* Section Content */}
          <div className="text-center">
            <div className="row">
              {/* Page Title */}
              <div className="col-md-8 offset-md-2">
                <h1 className="hs-title-1 mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">News</span>
                </h1>
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <p className="section-descr mb-0 wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1.2s">
                      Discovering our brilliant insights and inspiration.
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

      {/* Section */}
      <section className="page-section">
        <div className="container relative">
          <div className="row">
            {/* Content */}
            <div className="col-md-8 mb-sm-80">
              {/* Blog Posts Grid */}
              <div className="row mt-n30 mb-60 mb-sm-40">
                {/* Post Items */}
                {[
                  {
                    title: "Commencement of Striking off 100,000 Companies from the Register of Companies",
                    content: "The General Public is hereby informed that the Commission has compiled, for striking off, a list of 100,000 (one hundred thousand) companies which it has reasonable cause to believe are not carrying on business or have not been in operation for 10 years or have not complied with the provisions of the Companies and Allied Matters Act for a consecutive period of 10 years, including the requirement of filing of Annual Returns. The affected companies are advised to activate their status by filing the requisite annual returns with details of Persons with Significant Control and sending activation emails to activation@cac.gov.ng (where applicable) within 90 days of this publication to avoid being struck off.",
                    date: "August 3",
                  },
                  {
                    title: "NOTICE OF STRIKING OFF COMPANIES FROM THE REGISTER",
                    content: "The General public may recall that the Commission issued Notice of Intention to strike off names of Companies which the Commission has reasonable cause to believe are not carrying out business or are otherwise dormant by reason of not filing Annual Returns fora period of 10 years.Statutory Period of 90 days was given to such",
                    date: "November 20",
                  },
                  {
                    title: "GUIDELINES FOR RECAPITALIZATION OF BANKS AND OTHER FINANCIAL INSTITUTIONS",
                    content: "The Corporate Affairs Commission pursuant to its powers under Section 8 (1) (e) of the Companies and Allied Matters Act (CAMA) No. 3 of 2020 issues the below Guidelines for the recapitalization of Banks and other Financial Institutions – 1.New Incorporation Documentary and other Requirements: Approved Name Reservation or Availability Approval-in-Principle from Sector Regulator Duly",
                    date: "July 29",
                  },
                  {
                    title: "NOTICE OF INTENTION TO STRIKE OFF COMPANIES FROM THE REGISTER",
                    content: "This is to inform the General Public that the Commission pursuant to its powers contained in Section 692 (3) (4) of the Companies and Allied Matters Act No. 3 of 2020, intends to strike off from the Register, names of defunct or dormant companies that have not filed Annual Returns for a period of 10",
                    date: "July 24",
                  },
                  {
                    title: "REVOCATION OF CERTIFICATES OF INCORPORATION",
                    content: "The General Public is hereby informed that the Commission sequel to its powers contained in Section 41 (7) of the Companies and Allied Matters Act No 3 of 2020 revoked the Certificates of incorporation of the below mentioned companies because same were improperly procured. These companies are:   NIPOST Transport and Logistics Services Company Ltd",
                    date: "April 25",
                  },
                  {
                    title: "NOTICE OF INTENTION TO CANCEL CERTIFICATES OF INCORPORATION OF BUREAU DE CHANGE COMPANIES WHOSE LICENSES WERE REVOKED BY THE CENTRAL BANK OF NIGERIA.",
                    content: "The general public is hereby informed that following the revocation of the operational licenses of 4,173 Bureau De Change companies by the Central Bank of Nigeria vide a Federal Republic of Nigeria Official Gazette (Vol. 111) No. 37 of February 27, 2024 for non compliance with Regulatory Standards, the Corporate Affairs Commission in exercise of",
                    date: "July 10",
                  },
                  {
                    title: "UNAUTHORISED MESSAGES TO DIRECTORS OF NEWLY REGISTERED COMPANIES",
                    content: "The attention of the Corporate Affairs Commission (CAC) has been drawn to an avalanche of email messages sent to directors of newly registered companies requesting them to pay certain fees to obtain a tax identification number (TIN), among others. The Commission wishes to clearly state that such messages are not from us and that TIN",
                    date: "April 19",
                  },
                  {
                    title: "STATUS OF NIGERIA LAW SOCIETY",
                    content: "The general public is hereby informed that the above named Society has not been registered with the Commission which is the only statutory body charged with the responsibility of registration of all Non-Governmental Organizations.   Section 863 (2) of the Companies and Allied Matters Act No. 3 of 2020 makes it an offence for individuals,",
                    date: "August 6",
                  },
                ].map((post, index) => (
                  <div className="post-prev col-lg-6 mt-30" key={index}>
                    <div className="post-prev-container">
                      <h4 className="post-prev-title">
                        <a href="/news">{post.title}</a>
                      </h4>
                      <div className="post-prev-text">{post.content}</div>
                      <div className="post-prev-info clearfix">
                        <div className="float-start">
                          <a href="#">
                            <img className="post-prev-author-img" width="30" height="30" src="images/small-logo.png" alt="Image Description" />
                          </a>
                          <a href="#">Management</a>
                        </div>
                        <div className="float-end">
                          <a href="#">{post.date}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End Blog Posts Grid */}

              {/* Pagination */}
              <div className="pagination">
                <a href="#">
                  <i className="mi-chevron-left"></i>
                  <span className="visually-hidden">Previous page</span>
                </a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <span className="no-active">...</span>
                <a href="#">9</a>
                <a href="#">
                  <i className="mi-chevron-right"></i>
                  <span className="visually-hidden">Next page</span>
                </a>
              </div>
              {/* End Pagination */}
            </div>
            {/* End Content */}

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3 offset-lg-1">
              {/* Search Widget */}
              <div className="widget">
                <form className="form">
                  <div className="search-wrap">
                    <button className="search-button animate" type="submit" title="Start Search">
                      <i className="mi-search size-18"></i>
                      <span className="visually-hidden">Start search</span>
                    </button>
                    <input type="text" className="form-control input-lg search-field round" placeholder="Search..." />
                  </div>
                </form>
              </div>

              {/* Latest Posts Widget */}
              <div className="widget">
                <h3 className="widget-title">Latest posts</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-posts">
                    {[
                      {
                        image: "images/blog/previews/post-prev-1.jpg",
                        title: "FINANCIAL ANCHOR",
                        description: "FSRCC Quarterly Newsletter Volumn 1 No.1 (1)",
                      },
                      {
                        image: "images/blog/previews/post-prev-2.jpg",
                        title: "CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT",
                        description: "October 25th, 2024",
                      },
                      {
                        image: "images/blog/previews/post-prev-3.jpg",
                        title: "New Web Design Trends in 2023 Year",
                        description: "Posted by John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-4.jpg",
                        title: "Hipster’s Style in Web Design and Logo",
                        description: "Posted by John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-5.jpg",
                        title: "Duis Tristique Condimentum Nulla Bibendum Consectetu",
                        description: "Posted by John Doe",
                      },
                    ].map((post, index) => (
                      <li className="clearfix" key={index}>
                        <a href="#">
                          <img src={post.image} alt="" width="100" className="widget-posts-img" />
                        </a>
                        <div className="widget-posts-descr">
                          <a href="#" title="">{post.title}</a>
                          {post.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Latest Posts Widget */}

              {/* Comments Widget */}
              <div className="widget">
                <h3 className="widget-title">Comments</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-comments">
                    {[
                      "John Doe on <a href='#' title=''>Lorem ipsum dolor sit amet</a>",
                      "Emma Johnson on <a href='#' title=''>Suspendisse accumsan interdum tellus</a>",
                      "John Doe on <a href='#' title=''>Praesent ultricies ut ipsum</a>",
                      "Mark Deen on <a href='#' title=''>Vivamus malesuada vel nulla vulputate</a>",
                      "Sam Brin on <a href='#' title=''>Aenean auctor egestas auctor</a>",
                    ].map((comment, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: comment }} />
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Comments Widget */}

              {/* Archive Widget */}
              <div className="widget">
                <h3 className="widget-title">Archive</h3>
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    {["February 2021", "January 2021", "December 2020"].map((date, index) => (
                      <li key={index}>
                        <a href="#" title="">{date}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Archive Widget */}
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
      {/* End Section */}
    </>
  )
}

export default News