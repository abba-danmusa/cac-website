import React from 'react';

const NewsComponent = () => {
  return (
    <>
      {/* Header Section */}
      <section className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: 'url(images/hero.png)' }} id="news">
        <div className="container position-relative pt-30 pt-sm-50">
          {/* Section Content */}
          <div className="text-center">
            <div className="row">
              {/* Page Title */}
              <div className="col-md-8 offset-md-2">
                <h1 className="hs-title-1 mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    NOTICE OF STRIKING OFF COMPANIES FROM THE REGISTER
                  </span>
                </h1>

                {/* Author, Categories, Comments */}
                <div className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-clock size-16"></i>
                      <span className="visually-hidden">Date:</span> December 25
                    </a>
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-user size-16"></i>
                      <span className="visually-hidden">Author:</span> John Doe
                    </a>
                  </div>
                  <div className="d-inline-block me-3">
                    <i className="mi-folder size-16"></i>
                    <span className="visually-hidden">Categories:</span>
                    <a href="#"></a> <a href="#">Management</a>
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-message size-16"></i> 5 Comments
                    </a>
                  </div>
                </div>
                {/* End Author, Categories, Comments */}
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
              {/* Post */}
              <div className="blog-item mb-80 mb-xs-40">
                <div className="blog-item-body">
                  <p className="lead">
                    The General public may recall that the Commission issued Notice of Intention to strike off names of Companies which the Commission has reasonable cause to believe are not carrying out business or are otherwise dormant by reason of not filing Annual Returns for a period of 10 years. Statutory Period of 90 days was given to such
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa.
                  </p>
                  <p>
                    Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Vestibulum pellentesque, purus ut dignissim consectetur, nulla erat ultrices purus.
                    </p>
                    <footer>
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                  <p>
                    Praesent ultricies ut ipsum non laoreet. Nunc ac <a href="#">ultricies</a> leo. Nulla ac ultrices arcu. Nullam adipiscing lacus in consectetur posuere. Nunc malesuada tellus turpis, ac pretium orci molestie vel. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa. Fusce non ante sed lorem rutrum feugiat.
                  </p>
                  <ul>
                    <li>First item of the list</li>
                    <li>Second item of the list</li>
                    <li>Third item of the list</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non laoreet dui. Morbi lacus massa, euismod ut turpis molestie, tristique sodales est. Integer sit amet mi id sapien tempor molestie in nec massa. Fusce non ante sed lorem rutrum feugiat. Vestibulum pellentesque, purus ut dignissim consectetur, nulla erat ultrices purus, ut consequat sem elit non sem.
                  </p>
                </div>
              </div>
              {/* End Post */}

              {/* Comments */}
              <div className="mb-80 mb-xs-40">
                <h4 className="blog-page-title">Comments <small className="number">(3)</small></h4>
                <ul className="media-list comment-list clearlist">
                  {/* Comment Item */}
                  <li className="media comment-item">
                    <a className="float-start" href="#">
                      <img className="media-object comment-avatar" src="images/user-avatar.png" alt="" width="50" height="50" />
                    </a>
                    <div className="media-body">
                      <div className="comment-item-data">
                        <div className="comment-author">
                          <a href="#">John Doe</a>
                        </div>
                        Feb 9, 2023 at 10:23 <span className="separator">&mdash;</span>
                        <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                      </p>
                      {/* Comment of second level */}
                      <div className="media comment-item">
                        <a className="float-start" href="#">
                          <img className="media-object comment-avatar" src="images/user-avatar.png" alt="" />
                        </a>
                        <div className="media-body">
                          <div className="comment-item-data">
                            <div className="comment-author">
                              <a href="#">Sam Brin</a>
                            </div>
                            Feb 9, 2023 at 10:27 <span className="separator">&mdash;</span>
                            <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                          </p>
                        </div>
                      </div>
                      {/* End Comment of second level */}
                    </div>
                  </li>
                  {/* End Comment Item */}

                  {/* Comment Item */}
                  <li className="media comment-item">
                    <a className="float-start" href="#">
                      <img className="media-object comment-avatar" src="images/user-avatar.png" alt="" />
                    </a>
                    <div className="media-body">
                      <div className="comment-item-data">
                        <div className="comment-author">
                          <a href="#">Emma Johnson</a>
                        </div>
                        Feb 9, 2023 at 10:37 <span className="separator">&mdash;</span>
                        <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                      </p>
                    </div>
                  </li>
                  {/* End Comment Item */}

                  {/* Comment Item */}
                  <li className="media comment-item">
                    <a className="float-start" href="#">
                      <img className="media-object comment-avatar" src="images/user-avatar.png" alt="" />
                    </a>
                    <div className="media-body">
                      <div className="comment-item-data">
                        <div className="comment-author">
                          <a href="#">John Doe</a>
                        </div>
                        Feb 9, 2023 at 10:3 <span className="separator">&mdash;</span>
                        <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                      </p>
                    </div>
                  </li>
                  {/* End Comment Item */}
                </ul>
              </div>
              {/* End Comments */}

              {/* Add Comment */}
              <div className="mb-80 mb-xs-40">
                <h4 className="blog-page-title">Leave a comment</h4>
                {/* Form */}
                <form method="post" action="#" id="form" className="form">
                  <div className="row mb-30 mb-md-20">
                    <div className="col-md-6 mb-md-20">
                      <label htmlFor="name">Name *</label>
                      <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name"  required aria-required="true" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email *</label>
                      <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email"  required aria-required="true" />
                    </div>
                  </div>
                  <div className="mb-30 mb-md-20">
                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" id="website" className="input-lg round form-control" placeholder="Enter your website"  />
                  </div>
                  <div className="mb-30 mb-md-20">
                    <label htmlFor="comment">Comment</label>
                    <textarea name="comment" id="comment" className="input-lg round form-control"  placeholder="Enter your comment" ></textarea>
                  </div>
                  <button type="submit" className="btn btn-mod btn-large btn-round btn-hover-anim">
                    <span>Send comment</span>
                  </button>
                  <div className="form-tip bg-gray-light-1 round mt-30 p-3">
                    * - these fields are required. By sending the form you agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                  </div>
                </form>
                {/* End Form */}
              </div>
              {/* End Add Comment */}

              {/* Prev/Next Post */}
              <div className="clearfix mt-40">
                <a href="#" className="blog-item-more left">
                  <i className="mi-chevron-left"></i>&nbsp;Prev post
                </a>
                <a href="#" className="blog-item-more right">
                  Next post&nbsp;<i className="mi-chevron-right"></i>
                </a>
              </div>
              {/* End Prev/Next Post */}
            </div>
            {/* End Content */}

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3 offset-lg-1">
              {/* Search Widget */}
              <div className="widget">
                <form className="form">
                  <div className="search-wrap">
                    <button className="search-button animate" type="submit" title="Start Search">
                      <i className="mi-search size-18"></i> <span className="visually-hidden">Start search</span>
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
                        title: "Minimalistic Design Forever",
                        author: "John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-2.jpg",
                        title: "Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
                        author: "John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-3.jpg",
                        title: "New Web Design Trends in 2023 Year",
                        author: "John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-4.jpg",
                        title: "Hipster’s Style in Web Design and Logo",
                        author: "John Doe",
                      },
                      {
                        image: "images/blog/previews/post-prev-5.jpg",
                        title: "Duis Tristique Condimentum Nulla Bibendum Consectetu",
                        author: "John Doe",
                      },
                    ].map((post, index) => (
                      <li className="clearfix" key={index}>
                        <a href="#">
                          <img src={post.image} alt="" width="100" className="widget-posts-img" />
                        </a>
                        <div className="widget-posts-descr">
                          <a href="#" title="">
                            {post.title}
                          </a>
                          Posted by {post.author}
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
                        <a href="#" title="">
                          {date}
                        </a>
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
  );
};

export default NewsComponent;