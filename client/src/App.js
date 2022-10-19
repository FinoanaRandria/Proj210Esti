import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return loader ? (
    <Preloader />
  ) : (
    <div>
      <h1>app affiche</h1>
    </div>
  );
}

export default App;
