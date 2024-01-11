import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base.js';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Features from './components/Pages/Features.js';
import Pricing from './components/Pages/Pricing.js';
import Import from './components/Pages/Import.js';
import About from './components/Pages/About.js';
import SignUp from './components/Pages/SignUp.js';
import Login from './components/Pages/Login.js';
import Invester from './components/Pages/Invester.js';
import Import2 from './components/Pages/Import2.js';
import MyAccount from './components/Pages/MyAccount.js';
import Wealth from './components/Pages/Wealth.js';
function App(){
  return(
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Features" element={<Features/>}/>
<Route path="/Pricing" element={<Pricing/>}/>
<Route path="/Import" element={<Import/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/SignUp" element={<SignUp/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Invester" element={<Invester/>}/>
<Route path="/Import2" element={<Import2/>}/>
<Route path="/MyAccount" element={<MyAccount/>}/>
<Route path="/Wealth" element={<Wealth/>}/>
</Routes>
   </BrowserRouter>
  );
}
export default App;