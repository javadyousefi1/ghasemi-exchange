import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    axios.get("");
  }, []);

  return (
    <>
      {/* <div className="flex items-center justify-center">Hello new project</div> */}
    </>
  );
};

export default HomePage;
