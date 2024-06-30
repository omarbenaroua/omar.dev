import "./Title.css";

const Title = (props) => {
  return (
    <>
      <div className="container" onClick={props.onClick}>
        <p className="title">{props.children}</p>
        <div className="division"></div>
      </div>
    </>
  );
};

export default Title;
