import './PortfolioCard.css'
import {SecondaryButton} from '../../index'


const PortfolioCard = (props) => {

    return (
      <>
        <div name="scrollElement" className="portfolio-card col">
          <div className="card h-100 bg-dark">
            <img src={props.image} className="card-img-top" alt=" "></img>
            <div className="card-body">
              <h3 className="card-title">
              <img className="icon" src={props.icon} alt=''></img>
                {props.title}
              </h3>
              <p className="card-text">{props.text}</p>
              <div className="skill">{props.skills}</div>
              <p className="card-notice">{props.notice}</p>
              <div className='card-button'>
                <div>
              <SecondaryButton>
                <a href={props.site} target="_blank" rel="noreferrer">
                  Site Web
                </a>
              </SecondaryButton>
              </div>
              <p className="card-text"><span>Year of creation</span>: {props.year}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default PortfolioCard