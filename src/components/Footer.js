import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area section-gap" id="ghem-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">About Us</h4>
                                <p>Vietnamese cuisine in HCMC
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Contact Us</h4>
                                <p>
                                    103 Pasteur, Bến Nghé, District 1
                                    Ho Chi Minh City
                                </p>
                                <p>Open hours: 10:00 AM - 10:00 PM</p>
                                <p className="number">
                                    037 746 0304
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Book table</h4>
                                <p>Book your table through phone or email.</p>
                                <div className="d-flex flex-row" id="mc_embed_signup">


                                    <form className="navbar-form" noValidate="true"
                                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                          method="get">
                                        <div className="input-group add-on">
                                            <input className="form-control" name="EMAIL" placeholder="Email address"
                                                   onFocus="this.placeholder = ''"
                                                   onBlur="this.placeholder = 'Email address'" required=""
                                                   type="email"/>
                                            <div style={{position: "absolute", left: -5000}}>
                                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1"
                                                       value="" type="text"/>
                                            </div>
                                            <div className="input-group-btn">
                                                <button className="genric-btn"><span className="lnr lnr-arrow-right"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info mt-20"/>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-text m-0">Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                aria-hidden="true"/> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        <div className="footer-social d-flex align-items-center">
                            <a href="#"><i className="fa fa-facebook"/></a>
                            <a href="#"><i className="fa fa-twitter"/></a>
                            <a href="#"><i className="fa fa-dribbble"/></a>
                            <a href="#"><i className="fa fa-behance"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
