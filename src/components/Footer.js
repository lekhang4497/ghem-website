import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area section-gap" id="ghem-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Contact us</h4>
                                <p className="number">
                                    037 746 0304
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Address</h4>
                                <p>
                                    103 Pasteur, Bến Nghé, District 1
                                    Ho Chi Minh City
                                </p>
                                <p>Open hours: 10:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Book table</h4>
                                <p>Book your table through phone or facebook messenger.</p>
                                <div className="d-flex flex-row" id="mc_embed_signup">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-text m-0">Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        <div className="footer-social d-flex align-items-center">
                            <a href="https://www.facebook.com/ghembychuongdang/"><i className="fab fa-facebook-f"/></a>
                            <a href="https://www.tripadvisor.com/Restaurant_Review-g293925-d11954019-Reviews-Ghem-Ho_Chi_Minh_City.html"><i className="fab fa-tripadvisor"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
