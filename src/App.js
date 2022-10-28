import './App.css';
import {Routes,Route} from"react-router-dom";
import Home from "./pages/home";
import AddBill from "./pages/addBill";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addBill" element={<AddBill/>}/>
      </Routes> 
     
    </div>
  );
}

export default App;
