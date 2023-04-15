import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Academy from './Pages/Academy';
import Contact from './Pages/Contact';
import OurCall from './Pages/OurCall';
import Churchonline from './Pages/Churchonline';
import Blog from './Pages/Blog';
import OurHistory from './Pages/OurHistory';
import Resources from './Pages/Resources';
import UnitDepartment from './Pages/UnitDepartment';
import Leadership from './Pages/Leadership';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/academy' element={<Academy/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/our-call' element={<OurCall/>}/>
          <Route path='/church-online'element={<Churchonline/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/our-history' element={<OurHistory/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/unit-department' element={<UnitDepartment/>}/>
          <Route path='/leadership' element={<Leadership/>}/>  
        </Routes>
      </Router>       
      
     
      
    </div>
  );
}

export default App;
