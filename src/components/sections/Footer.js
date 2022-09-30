import React from 'react';
import '../../style/Footer.css';
import Logo from '../../images/logo.png';

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row row-cols-md-4 row-cols-lg-4 row-cols-sm-2 footer_info">
                        <div className="col-6 d-flex justify-content-center">
                            <div>
                                <div>
                                    <img style={{
                                        width: '225px',
                                        height: '60px'
                                    }} src={Logo} alt="" className="img-fluid mb-3" />
                                </div>
                                <p>Lighthouse always provide best and quality products to their customers. </p>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <div>
                                <h3>Contact</h3>
                                <p><i class="fas fa-map-marker color-fruit"></i> 250 northern blwd suite 3254-1033 albany,ny 124-1200, UK.</p>
                                <h6><i class="fas fa-phone-alt color-fruit"></i> +871-888-88888</h6>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <div>
                                <h3>Viewer Guides</h3>
                                <h6>Feature</h6>
                                <h6>Careers</h6>
                                <h6>Blog Post</h6>
                                <h6>Help & Support</h6>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <div>
                                <h3>Community</h3>
                                <h6>About Us</h6>
                                <h6>Our Clients</h6>
                                <h6>Legal Notice</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p className="text-center">&copy;2021 LightHouse Shop</p>
            </div>
        </>
    );
};

export default Footer;