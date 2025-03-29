'use client'
// import { useStore } from '@/utils/store';
import React, { useEffect, useState } from 'react';

const NewsComponent = () => {
    // const { newsItem } = useNews();
    const [news, setNews] = useState<any>()
    useEffect(() => {
      const news = JSON.parse(localStorage.getItem('news') || '')
      setNews(news)
    }, [])
    
  
    // Destructure with defaults
    const {
      title,
      date,
      author,
      categories = ["Management"],
      commentsCount = 5,
      content = [],
      text,
      listItems = [],
      comments = [],
      latestPosts = [],
      recentComments = [],
      archives = [],
    } = news || [];
  return (
    <>
      {/* Header Section */}
      <section className="page-section bg-gray-light-1 parallax-5" style={{ backgroundImage: "url(images/hero.png)" }} id="news">
        <div className="container position-relative pt-30 pt-sm-50">
          
          {/* Section Content */}
          <div className="text-center">
            <div className="row">
              
              {/* Page Title */}
              <div className="col-md-8 offset-md-2">
                    
                <h1 className="hs-title-1 mb-20">
                  <span className="wow charsAnimIn" data-splitting="chars">{title}</span>
                </h1>
                
                {/* Author, Categories, Comments */}
                <div className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="d-inline-block me-3">
                    <a href="#"><i className="mi-clock size-16"></i><span className="visually-hidden">Date:</span> {date}</a>
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#"><i className="mi-user size-16"></i><span className="visually-hidden">Author:</span> {author}</a>
                  </div>
                  <div className="d-inline-block me-3">
                    <i className="mi-folder size-16"></i>
                    <span className="visually-hidden">Categories:</span>
                    {categories.map((category: any, index: any) => (
                      <React.Fragment key={index}>
                        {index > 0 && ', '}
                        <a href="#">{category}</a>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#"><i className="mi-message size-16"></i> {commentsCount} Comments</a>
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
                    {text}
                  </p> 
                  
                  {content.map((paragraph: any, index: any) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  
                  <blockquote>
                    {/* <p>
                      {quote.text}
                    </p> */}
                    {/* <footer>
                      {quote.author} in 
                      <cite title="Source Title">
                        {quote.source}
                      </cite>
                    </footer> */}
                  </blockquote>
                  
                  <ul>
                    {listItems.map((item: any, index: any) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                </div>
                
              </div>
              {/* End Post */}
            
              {/* Comments */}
              <div className="mb-80 mb-xs-40">
                
                <h4 className="blog-page-title">Comments <small className="number">({comments.length})</small></h4>
                
                <ul className="media-list comment-list clearlist">
                  
                  {comments.map((comment: any) => (
                    <React.Fragment key={comment.id}>
                      {/* Comment Item */}
                      <li className="media comment-item">
                        
                        <a className="float-start" href="#"><img className="media-object comment-avatar" src="images/user-avatar.png" alt="" width="50" height="50" /></a>
                        
                        <div className="media-body">
                          
                          <div className="comment-item-data">
                            <div className="comment-author">
                              <a href="#">{comment.author}</a>
                            </div>
                            {comment.date} <span className="separator">&mdash;</span>
                            <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                          </div>
                          
                          <p>
                            {comment.text}
                          </p>
                          
                          {/* Replies */}
                          {comment.replies.map((reply: any) => (
                            <div className="media comment-item" key={reply.id}>
                              
                              <a className="float-start" href="#"><img className="media-object comment-avatar" src="images/user-avatar.png" alt="" /></a>
                              
                              <div className="media-body">
                                
                                <div className="comment-item-data">
                                  <div className="comment-author">
                                    <a href="#">{reply.author}</a>
                                  </div>
                                  {reply.date} <span className="separator">&mdash;</span>
                                  <a href="#"><i className="fa fa-comment"></i>&nbsp;Reply</a>
                                </div>
                                
                                <p>
                                  {reply.text}
                                </p>
                                
                              </div>
                              
                            </div>
                          ))}
                          {/* End Replies */}
                          
                        </div>
                        
                      </li>
                      {/* End Comment Item */}
                    </React.Fragment>
                  ))}
                  
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
                      {/* Name */}
                      <label htmlFor="name">Name *</label>
                      <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name" maxLength={100} required aria-required="true" />
                    </div>
                    
                    <div className="col-md-6">
                      {/* Email */}
                      <label htmlFor="email">Email *</label>
                      <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email" maxLength={100} required aria-required="true" />
                    </div>
                    
                  </div>
                  
                  <div className="mb-30 mb-md-20">
                    {/* Website */}
                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" id="website" className="input-lg round form-control" placeholder="Enter your website" maxLength={100} />
                  </div>
                  
                  {/* Comment */}
                  <div className="mb-30 mb-md-20">
                    <label htmlFor="comment">Comment</label>
                    <textarea name="comment" id="comment" className="input-lg round form-control" rows={6} placeholder="Enter your comment" maxLength={400}></textarea>
                  </div>
                  
                  {/* Send Button */}
                  <button type="submit" className="btn btn-mod btn-large btn-round btn-hover-anim">
                    <span>Send comment</span>
                  </button>
                  
                  {/* Inform Tip */}
                  <div className="form-tip bg-gray-light-1 round mt-30 p-3">
                    * - these fields are required. By sending the form you agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                  </div>
                  
                </form>
                {/* End Form */}
                    
              </div>
              {/* End Add Comment */}
              
              {/* Prev/Next Post */}
              <div className="clearfix mt-40">
                <a href="#" className="blog-item-more left"><i className="mi-chevron-left"></i>&nbsp;Prev post</a>
                <a href="#" className="blog-item-more right">Next post&nbsp;<i className="mi-chevron-right"></i></a>
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
             
              {/* Widget */}
              <div className="widget">
                
                <h3 className="widget-title">Latest posts</h3>
                
                <div className="widget-body">
                  <ul className="clearlist widget-posts">
                    {latestPosts.map((post: any, index: any) => (
                      <li className="clearfix" key={index}>
                        <a href="#"><img src={post.image} alt="" width={100} className="widget-posts-img" /></a>
                        <div className="widget-posts-descr">
                          <a href="#" title="">{post.title}</a>
                          Posted by {post.author}  
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
              {/* End Widget */}
              
              {/* Widget */}
              <div className="widget">
                
                <h3 className="widget-title">Comments</h3>
                
                <div className="widget-body">
                  <ul className="clearlist widget-comments">
                    {recentComments.map((comment: any, index: any) => (
                      <li key={index}>
                        {comment.author} on <a href="#" title="">{comment.post}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
             
              
              {/* Widget */}
              <div className="widget">
                
                <h3 className="widget-title">Archive</h3>
                
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    {archives.map((archive: any, index: any) => (
                      <li key={index}>
                        <a href="#" title="">{archive.month}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
              {/* End Widget */}
              
            </div>
            {/* End Sidebar */}
          
          </div>
          
        </div>
      </section>
    </>
  );
};

export default NewsComponent;