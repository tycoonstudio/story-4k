import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Dashbord from "./pages/dashbord";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashbord />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
