import './App.css';
import {Routes,Route} from"react-router-dom";
import Home from "./pages/home";
import AddBill from "./pages/addBill";
import Expansechart from "./pages/expansechart";
import UpdateBill from './pages/updatebill';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addBill" element={<AddBill/>}/>
        <Route path="/expansechart" element={<Expansechart/>}/>
        <Route path="/updatebill/:id" element={<UpdateBill/>}/>
      </Routes> 
     
    </div>
  );
}

export default App;
