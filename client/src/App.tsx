import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import ItemDetails from './components/ItemDetails';


import Alert from "./components/lib/Alert.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/item/:itemId" element={<ItemDetails />} />
            <Route path='/form' element={<Form/>}/>
            <Route path='/about' element={<About/>}/>


            <Route path='/component/alert' element={<Alert />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
