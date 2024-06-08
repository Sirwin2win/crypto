import "../components/Styles.css";

const HomePage = () => {
  return (
    <div className="container bgImg">
      <div className="row">
        <div className="col text-white mt-5">
          <b className="mainfont">
            "You can't stop things like Bitcoin. It will be everywhere, and the
            world will have to readjust. World governments will have to
            readjust"
          </b>
          <p className="subfont">John McAfee, Founder of McAfee</p>
        </div>
        <div className="col"></div>
        <div className="col text-white mt-5">
          <b className="mainfont">
            Bitcoin will do to banks what email did to the postal industry
          </b>
          <p className="subfont">
            Rick Falkvinge, Founder of the Swedish pirate party
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
