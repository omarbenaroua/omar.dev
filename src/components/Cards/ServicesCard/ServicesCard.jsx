import "./ServicesCard.css";

function ServicesCard(props) {
  return (
    <>
      <div className="services-card card text-center mb-3 bg-dark" style={{ width: "22rem" }}>
        <div className="card-body bg-dark">
        <img src={props.img} alt="" />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-start">
          {props.text}
          <div className="punto"></div>
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
