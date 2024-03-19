import "./index.scss";

const UrgencyList = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="urgency-circle in-progress">
          <span className="inner-circle"></span>
        </span>
        <p className="ml-1 urgency-text">icradadır</p>
      </div>
      <div className="flex items-center">
        <span className="urgency-circle not-started">
          <span className="inner-circle"></span>
        </span>
        <p className="ml-1 urgency-text">başlamayıb</p>
      </div>
      <div className="flex items-center">
        <span className="urgency-circle executed">
          <span className="inner-circle"></span>
        </span>
        <p className="ml-1 urgency-text">icra edilmişdir</p>
      </div>
      <div className="flex items-center">
        <span className="urgency-circle delaying">
          <span className="inner-circle"></span>
        </span>
        <p className="ml-1 urgency-text">gecikir</p>
      </div>
    </div>
  );
};

export default UrgencyList;
