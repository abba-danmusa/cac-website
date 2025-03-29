
const BoardMembers = () => {

  return (
    <section className="page-section bg-gray-light-1" id="team">
    <div className="container position-relative">
      <div className="row">
        {/* Quote */}
        <div className="col-md-6 mb-sm-60 mb-xs-40 d-flex align-items-center">
          <blockquote className="testimonial mb-0 wow fadeInUp">
            <div className="blockquote-icon" aria-hidden="true">“</div>
            <p>We are a strong team who brings innovative ideas into production.</p>
            <footer>
              <div className="section-line mb-10"></div>
              SAN.Ishaq Hussaini Magaji
              <div className="small">Registrar General, CAC</div>
            </footer>
          </blockquote>
        </div>
        {/* End Quote */}

        {/* Team Carousel */}
        <div className="col-md-6">
          <div>
            <div className="team-carousel">
              {/* Team item */}
              <div className="team-carousel-item">
                <div className="team-item">
                  <div className="team-item-image">
                    <img src="images/rg-cac-1.jpg" className="wow scaleOutIn" alt="Image Description" />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram-i"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">SAN.Ishaq Hussaini Magaji, SAN</div>
                    <div className="team-item-role">Registrar General, CAC</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}

              {/* Repeat for other team members */}
              <div className="team-carousel-item">
                <div className="team-item">
                  <div className="team-item-image">
                    <img src="images/rg-cac-2.jpg" className="wow scaleOutIn" alt="Image Description" />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram-p"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">SAN.Ishaq Hussaini Magaji</div>
                    <div className="team-item-role">Registrar General, CAC</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}

              {/* More team items */}
              <div className="team-carousel-item">
                <div className="team-item">
                  <div className="team-item-image">
                    <img src="images/rg-cac-3.jpg" alt="Image Description" />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram-i"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">SAN.Ishaq Hussaini Magaji</div>
                    <div className="team-item-role">Registrar General, CAC</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}

              <div className="team-carousel-item">
                <div className="team-item">
                  <div className="team-item-image">
                    <img src="images/rg-cac-4.jpg" alt="Image Description" />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram-t"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">SAN.Ishaq Hussaini Magaji</div>
                    <div className="team-item-role">Registrar General, CAC</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
            </div>
          </div>
        </div>
        {/* End Team Carousel */}
      </div>
    </div>
  </section>
  );
};

export default BoardMembers;