
import { Route, Routes } from 'react-router-dom';
import './App.css';

import DashBoard from './Component/DashBoard';

import NavBar from './Component/NavBar';
import Form from './Component/Form';




function App() {
  return (
    <>
   
  <Routes>
    
    <Route path="/" element={<DashBoard/>}/> 
<Route path='/contact' element={<Form/>}/>
    </Routes>
    </>
   
  );
}

export default App;
