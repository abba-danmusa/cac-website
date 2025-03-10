import React from "react";

const BlogSection = () => {
  const posts = [
    {
      title: "Commencement of Striking off 100,000 Companies from the Register of Companies",
      text: "The General Public is hereby informed that the Commission has compiled, for striking off, a list of 100,000 (one hundred thousand) companies which it has reasonable cause to believe are not carrying on business...",
      author: "Management",
      date: "August 3",
      link: "/singleNews",
    },
    {
      title: "CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT",
      text: "On behalf of the Corporate Affairs Commission, we extend our heartfelt congratulations on your appointment as the Minister of Trade...",
      author: "Management",
      date: "October 25",
      link: "/singleNews",
    },
    {
      title: "Visually Identity and Branding for Mexican Restaurant",
      text: "Anta Petrenco shared a beautiful visual identity, branding and packaging design project on their Behance profile...",
      author: "Thomas Johnson",
      date: "August 1",
      link: "/singleNews",
    },
  ];

  return (
    <section id="blog" className="page-section">
      <div className="container position-relative">
        <div className="row mb-60 mb-xs-30">
          <div className="col-md-6">
            <h2 className="section-caption mb-xs-10">Our Blog</h2>
            <h3 className="section-title mb-0">The latest news</h3>
          </div>
          <div className="col-md-5 offset-md-1 text-start text-md-end pt-40 pt-sm-20">
            <a href="/news" className="link-hover-anim underline align-middle">
              Read more in our blog <i className="mi-arrow-right size-18"></i>
            </a>
          </div>
        </div>
        <div className="row mt-n50">
          {posts.map((post, index) => (
            <div key={index} className={`post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft`}>
              <div className="post-prev-container">
                <h4 className="post-prev-title">
                  <a href={post.link}>{post.title}</a>
                </h4>
                <div className="post-prev-text">{post.text}</div>
                <div className="post-prev-info clearfix">
                  <div className="float-start">
                    <a href="#">
                      <img
                        className="post-prev-author-img"
                        width="30"
                        height="30"
                        src="images/small-logo.png"
                        alt="Author"
                      />
                    </a>
                    <a href="#">{post.author}</a>
                  </div>
                  <div className="float-end">
                    <a href="#">{post.date}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
