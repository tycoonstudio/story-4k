import React from "react";
import "./_style.scss";

import Hero from "./components/hero";
import Card from "./components/card";

const dashbord = () => {
  return (
    <div>
      <Hero />
      <Card />
    </div>
  );
};

export default dashbord;
