import "./Footer.css";
import { LogoSecondary, Social } from "../../components/index";

const Footer = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h2 className="contact-title">Contact</h2>
          <p>my contacts</p>
          <div className="info">
            <p className="label">Contact me at this address:</p>
            <a
              href="mailto:benarouaomar@gmail.com?subject=Contact"
              className="link"
            >
              benarouaomar@gmail.com
            </a>
            <div className="social">
              <p>Find me on social networks</p>
              <Social />
              <LogoSecondary/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        &copy;2022 <span>Omar Ben Aroua</span>
      </div>
    </>
  );
};

export default Footer;
