import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__intro">
        <h2>Get in touch!</h2>
        <div className="line"></div>
        <h5>Do you have any project idea?</h5>
      </div>
      <div className="contact__details__container">
        <div className="social">
          <h5>Send mail at: </h5>
          <a href="mailto:babistsour@gmail.com">babistsour@gmail.com</a>
          <h5>Or find me on social: </h5>
          <a href="https://www.facebook.com/giotas.giotoglou">Facebook</a>
          <br />
          <a href="https://www.linkedin.com/in/babis-tsourlis-7b736a189/">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/babistsour">Github</a>
        </div>
        <div className="personal">
          <div className="personal__phone">
            <div className="details">
              <h5>Phone</h5>
              <a href="tel:+036981915038">6981915038</a>
            </div>
            <div className="vertical__Line"></div>
            <div className="icon">
              <i class="fas fa-phone"></i>
            </div>
          </div>
          <div className="personal__address">
            <div className="details">
              <h5>Address</h5>
              <p>Kasou 20 Peiraius, Athens</p>
            </div>
            <div className="vertical__Line"></div>
            <div className="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
          </div>
          <div className="email">
            <div className="details">
              <h5>Email</h5>
              <a href="mailto:babistsour@gmail.com">babistsour@gmail.com</a>
            </div>
            <div className="vertical__Line"></div>
            <div className="icon">
              <i class="fas fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrights">
        <p>Made by Babis Tsourlis &#169; babis tsourlis 2021</p>
      </div>
    </div>
  );
};

export default Contact;
