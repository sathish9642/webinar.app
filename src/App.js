
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Services from './Components/Services';
import Web from './Components/Web';
import HomePage from './Pages/Home/HomePage';
import ServicePage from './Pages/Services/ServicePage';
import TrainingPage from './Pages/Training/TrainingPage';


function App() {
  return (
    <div> 
<BrowserRouter>
<Routes>
<Route path="/" element={<ServicePage />}/>
<Route path= "/services" element={<Services />}/>
<Route path='/training' element={<TrainingPage />}/>



</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
