import blueBallon from "../assets/balloon/blue.svg";
import yellowBallon from "../assets/balloon/yellow.svg";
import greenBallon from "../assets/balloon/green.svg";
import redBallon from "../assets/balloon/red.svg";

const Ballons = () => {
  return (
    <>
      <img
        src={redBallon}
        style={{
          position: "absolute",
          height: "200px",
          top: "30px",
          right: "0px",
        }}
      />
      <img
        src={blueBallon}
        style={{
          position: "absolute",
          height: "200px",
          bottom: "30px",
          right: "-20px",
          zIndex: "11",
        }}
      />
      <img
        src={greenBallon}
        style={{
          position: "absolute",
          height: "200px",
          top: "-20px",
          left: "20px",
          transform: "scaleX(-1)",
        }}
      />
      <img
        src={yellowBallon}
        style={{
          position: "absolute",
          height: "200px",
          bottom: "0px",
          left: "30px",
          transform: "scaleX(-1)",
          zIndex: "11",
        }}
      />
    </>
  );
};

export default Ballons;
