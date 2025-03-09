import { useState, } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override= {
  display: "block",
  margin: "0 auto",
};

function Loder() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("white");

  return (
    <div className="sweet-loading bg-black h-screen w-screen grid place-content-center ">
     
      <ScaleLoader	
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loder;
