import React from 'react';
import './App.css';
import Home from "./Component/Home"
import ResultLKG from "./Component/LKG/ResultLKG"
import MainResultLKG from "./Component/LKG/MainResultLKG"
import ResultUKG from "./Component/UKG/ResultUKG"
import MainResultUKG from "./Component/UKG/MainResultUKG"
import MainResult1 from "./Component/1st/MainResult1"
import MainResult9 from "./Component/9th/MainResult9"
import MainResult5 from "./Component/5th/MainResult5"
import MainResult7 from "./Component/7th/MainResult7"
import MainResult8 from "./Component/8th/MainResult8"
import Result1 from "./Component/1st/Result1"
import Result9 from "./Component/9th/Result9"
import Result7 from "./Component/7th/Result7"
import Result5 from "./Component/5th/Result5"
import Result8 from "./Component/8th/Result8"
// <!-- import { useReactToPrint } from 'react-to-print'; -->
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  
  return (
    <Router>  
     
      
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/ResultLKG" element={<ResultLKG />} />
      <Route  path="/ResultUKG" element={<ResultUKG />} />
      <Route  path="/MainResultLKG" element={<MainResultLKG />} />
      <Route  path="/Result1" element={<Result1 />} />
      <Route  path="/Result9" element={<Result9 />} />
      <Route  path="/Result5" element={<Result5 />} />
      <Route  path="/Result7" element={<Result7 />} />
      <Route  path="/Result8" element={<Result8 />} />
      <Route  path="/MainResultUKG" element={<MainResultUKG />} />
      <Route  path="/MainResult1" element={<MainResult1 />} />
      <Route  path="/MainResult9" element={<MainResult9 />} />
      <Route  path="/MainResult5" element={<MainResult5 />} />
      <Route  path="/MainResult7" element={<MainResult7 />} />
      <Route  path="/MainResult8" element={<MainResult8 />} />
     
  </Routes>

    </Router>
   
  );
}

export default App;
// Result format of 1st to 4th is same
// Result format of 5th to 6th is same
// Result format of 7,8,9 is different ,
