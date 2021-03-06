const Contact = () => {
    return <section id="contact" className="contact">
        <div className="container">

            <div className="section-title">
                <h3><span>Contact Us</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque
                    vitae autem.</p>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="info-box mb-4">
                        <i className="bi bi-map"></i>
                        <h3>Our Address</h3>
                        <p>111 Abc Street, Dfghjk, PP 123456</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                        <i className="bi bi-envelope"></i>
                        <h3>Email Us</h3>
                        <p>contact@example.com</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="info-box  mb-4">
                        <i className="bi bi-telephone-inbound"></i>
                        <h3>Call Us</h3>
                        <p>+1 2345 6789 23</p>
                    </div>
                </div>

            </div>

            <div className="row">

                <div className="col-lg-6 ">
                    <iframe className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3727.575966256034!2d-76.26409719366643!3d20.889134898770603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1649949954591!5m2!1ses!2sus"
                            frameBorder="0" style={{border:0, width: '100%', height: '384px'}} allowFullScreen></iframe>
                </div>

                <div className="col-lg-6">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col form-group">
                                <input type="text" name="name" className="form-control" id="name"
                                       placeholder="Your Name" required/>
                            </div>
                            <div className="col form-group">
                                <input type="email" className="form-control" name="email" id="email"
                                       placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject"
                                   placeholder="Subject" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                      required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </section>
}
export default Contact
