import React from "react";
import "./_style.scss";

import Hero from "./components/hero";
import Card from "./components/card";
import Template from "./components/template";

const dashbord = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Template />
    </div>
  );
};

export default dashbord;
