import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Components from "./components/Components";
import About from "./components/Pricing";
import Subscription from "./components/Subscription";
// import Footer from "./components/Footer";

import Alert from "./components/ui/Alert";
import Button from "./components/ui/Buttons";
import Card from "./components/ui/Card";
import Test from "./components/ui/Test";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App ">
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/ui/alert" element={<Alert />} />
            <Route path="/components/ui/button" element={<Button />} />
            <Route path="/components/ui/card" element={<Card />} />
            <Route path="/components/ui/Test" element={<Test />} />
            <Route path="/components" element={<Components />} />
            <Route path="/pricing" element={<About />} />
            <Route path="/pricing/subscription" element={<Subscription />} />
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
