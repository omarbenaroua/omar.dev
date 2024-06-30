import "./Social.css";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      <div className="social">
        <Link
          to="https://github.com/omarbenaroua"
          target="_blank"
          className="location"
        >
          <i className="fa-brands fa-github"></i>
        </Link>

        <Link
          to="https://www.facebook.com/omar.benarua.92/?locale=it_IT"
          target="_blank"
          className="location"
        >
          <i className="fa-brands fa-facebook"></i>
        </Link>

        <Link
          to="https://www.instagram.com/omarbenaroua/"
          target="_blank"
          className="location"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>

        <Link
          to="https://www.linkedin.com/in/omar-ben-aroua-969945215/"
          target="_blank"
          className="location"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
    </>
  );
};

export default Social;
