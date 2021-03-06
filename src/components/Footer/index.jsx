import servicesJson from "../commun/services.json"
const Footer = ({displayNewsletter = true}) => (<footer id="footer">
    {
        displayNewsletter &&  <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
    {
        !displayNewsletter && <hr className="dropdown-divider"/>
    }
    <div className="footer-top">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Challenger<span>.</span></h3>
                    <p>
                        111 Abc Street <br/>
                        Dfghjk, PP 123456<br/>
                        Xcvbn Dfgh <br/>
                        <strong>Phone:</strong> +1 2345 6789 23<br/>
                        <strong>Email:</strong> contact@example.com <br/>
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Posts</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Albums</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Todo</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        {
                            servicesJson.map(({title,link},index) => (<li key={index}><i className="bi bi-chevron-right"></i> <a href={link}>{title}</a></li>))
                        }
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Social Networks</h4>
                    <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>)

export default Footer
