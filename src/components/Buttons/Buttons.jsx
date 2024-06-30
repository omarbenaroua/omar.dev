import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <>
      <button type="button" className="primary-btn btn">
       {props.children}
      </button>
    </>
  );
};

const SecondaryButton = (props) => {
  return (
    <>
      <button type="button" className="secondary-btn btn" onClick={props.onClick}>
      {props.children}
      </button>
    </>
  );
};

export default PrimaryButton;
export { SecondaryButton };
