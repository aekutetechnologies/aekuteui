import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Components from "./components/Components";
import About from "./components/Pricing";
import Button from "./components/ui/Buttons";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ui/button" element={<Button />} />
              <Route path="/ui/alert" element={<Alert />} />
              <Route path="/components" element={<Components />} />
              <Route path="/pricing" element={<About />} />
            </Routes>
          </div>
          {/* <Footer/> */}
        </div>
      </>
    </Router>
  );
}

export default App;
