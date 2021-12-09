import React,{useState,useEffect} from 'react'
import './Result9.css';
import Header from "../Header/Header"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
 const Result9 = () => {
    const [name, setname] = useState("");
    const [roll, setroll] = useState(0);
    const [hindi, sethindi] = useState(0);
 
    const [it, setit] = useState(0);
    const [math, setmath] = useState(0);
 
    const [english, setenglish] = useState(0);
  
    const [total, settotal] = useState(0);
    const [sci,setsci]=useState(0);
    const [ssci,setssci]=useState(0);
    const [clas, setclas] = useState("");
    const [max,setmax]=useState(500);
    const [punc,setpunc]=useState("");
    const [disc,setdisc]=useState("");
    const [clean,setclean]=useState("");
    const [beh,setbeh]=useState("");
    const [oact,setoact]=useState("");

    function submit(e){
        e.preventDefault();
        settotal(hindi+english+math+it+sci+ssci);
    }

    return (
    <>
      <Header />
      <div class="container bg-info">
         <form action=""  onSubmit={submit}>
             <div class="form">
                <label for="name">Name</label>
                <input value={name}   onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter your name" />    
             </div>
             <div class="form">
                <label for="name">Roll No.</label>
                <input value={roll}   onChange={(e)=>setroll(e.target.value)} type="number" placeholder="Enter your roll number" />    
             </div>
             <div class="form">
                <label for="name">Class</label>
                <input value={clas}   onChange={(e)=>setclas(e.target.value)} type="text" placeholder="Enter Class" />    
             </div>
             <div class="form">
                <label for="name">Hindi</label>
                <input value={hindi}   onChange={(e)=>sethindi(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
            
             <div class="form">
                <label for="name">English</label>
                <input value={english}   onChange={(e)=>setenglish(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
            
             <div class="form">
                <label for="name">Math</label>
                <input value={math}   onChange={(e)=>setmath(e.target.value)} type="number" placeholder="Enter your name" />     
             </div>
             
           
             <div class="form">
                <label for="name">IT</label>
                <input value={it}   onChange={(e)=>setit(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Science</label>
                <input value={sci}   onChange={(e)=>setsci(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">S.Science</label>
                <input value={ssci}   onChange={(e)=>setssci(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
            
             <div class="form">
                <label for="name">Punctuality </label>
                <input value={punc}   onChange={(e)=>setpunc(e.target.value)} type="text" placeholder="Enter details" />    
             </div>
             <div class="form">
                <label for="name">Discpline </label>
                <input value={disc}   onChange={(e)=>setdisc(e.target.value)} type="text" placeholder="Enter details" />    
             </div>
             <div class="form">
                <label for="name">Cleanliness </label>
                <input value={clean}   onChange={(e)=>setclean(e.target.value)} type="text" placeholder="Enter details" />    
             </div>
             <div class="form">
                <label for="name">Behaviour </label>
                <input value={beh}   onChange={(e)=>setbeh(e.target.value)} type="text" placeholder="Enter details" />    
             </div>
             <div class="form">
                <label for="name">Other Activities </label>
                <input value={oact}   onChange={(e)=>setoact(e.target.value)} type="text" placeholder="Enter details" />    
             </div>
             <div className="buttn  " ><Link  to= "/MainResult9" state={{oact:oact, disc:disc,clean:clean,beh:beh,punc:punc ,class:clas, name:name, roll:roll, hindi:hindi, english:english,math:math,it:it,sci:sci,ssci:ssci}} type="submit" className="btn bg-danger">Submit </Link> </div>
             
         </form>
     </div>

     </>
    )
}
export default Result9;