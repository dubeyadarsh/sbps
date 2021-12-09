import React,{useState,useEffect} from 'react'
import './ResultUKG.css';
import Header from "../Header/Header"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
 const ResultUKG = () => {
    const [name, setname] = useState("");
    const [roll, setroll] = useState(0);
    const [hindi, sethindi] = useState(0);
    const [art, setart] = useState(0);
    const [sports, setsports] = useState(0);
    const [conv, setconv] = useState(0);
    const [math, setmath] = useState(0);
    const [math_o, setmath_o] = useState(0);
    const [english, setenglish] = useState(0);
    const [english_o, setenglish_o] = useState(0);
    const [hindi_o, sethindi_o] = useState(0);
    const [total, settotal] = useState(0);
    const [clas, setclas] = useState("");
    const [max,setmax]=useState(500);
    const [punc,setpunc]=useState("");
    const [disc,setdisc]=useState("");
    const [clean,setclean]=useState("");
    const [beh,setbeh]=useState("");
    const [oact,setoact]=useState("");

    function submit(e){
        e.preventDefault();
        settotal(hindi+english+math+hindi_o+art+english_o+math_o+conv);
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
                <input value={clas}   onChange={(e)=>setclas(e.target.value)} type="text" placeholder="Enter class" />    
             </div>
             <div class="form">
                <label for="name">Hindi</label>
                <input value={hindi}   onChange={(e)=>sethindi(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Hindi-Oral</label>
                <input value={hindi_o}   onChange={(e)=>sethindi_o(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">English</label>
                <input value={english}   onChange={(e)=>setenglish(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">English Oral</label>
                <input value={english_o}   onChange={(e)=>setenglish_o(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Math</label>
                <input value={math}   onChange={(e)=>setmath(e.target.value)} type="number" placeholder="Enter your name" />     
             </div>
             <div class="form">
                <label for="name">Math-Oral</label>
                <input value={math_o}   onChange={(e)=>setmath_o(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Art</label>
                <input value={art}   onChange={(e)=>setart(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Conversation</label>
                <input value={conv}   onChange={(e)=>setconv(e.target.value)} type="number" placeholder="Enter your marks" />    
             </div>
             <div class="form">
                <label for="name">Sports</label>
                <input value={sports}   onChange={(e)=>setsports(e.target.value)} type="number" placeholder="Enter your marks" />    
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
             <div className="buttn" ><Link  to= "/MainResultUKG" state={{oact:oact, disc:disc,clean:clean,beh:beh,punc:punc ,class:clas, name:name, roll:roll, hindi:hindi, hindi_o:hindi_o, english:english,english_o:english_o,math:math,math_o:math_o,art:art,conv:conv,sports:sports}} type="submit" className="btn bg-danger">Submit </Link> </div>
             
         </form>
     </div>

     </>
    )
}
export default ResultUKG;