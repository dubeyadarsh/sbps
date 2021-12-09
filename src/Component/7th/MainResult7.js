import React,{useState,useEffect} from 'react'
import "./MainResult7.css";
import { useLocation } from "react-router-dom";
import logo from "../img/img.jpeg";


const MainResult7 = () => {
  const location = useLocation();
  const props = location.state;
  console.log(props);
  const [total, settotal] = useState(0);
  const [perc, setperc] = useState(0);
  const [grade, setgrade] = useState("");
  const[result,setresult]= useState("Passed");
  useEffect(()=>{
      let x=Number(props.hindi)+Number(props.english)+Number(props.grm)+Number(props.math)+Number(props.sci)+Number(props.art)+Number(props.ssci)+Number(props.gk)+Number(props.comp);
    settotal(x);
    let per=((x/400)*100).toFixed(2);
    setperc(per);
    if(per>=60){
        setgrade("First Division");
    }
    else if(per<60 && per>=50){
        setgrade("Second Division");
    }
    else if(per>=33){
        setgrade("Third Division");
    }
    else {
        setgrade("-");
        setresult("Failed");
    }
 },[]);
 function handleprint(e){
    e.preventDefault();
    document.getElementById("butn").style.display="none";
    setTimeout(
        () => document.getElementById("butn").style.display="flex", 
        6000
      );
    window.print();
  }
  return (
    <div>
      <div className="content">
        <div className="log">
          <img src={logo} id="img" alt="" />
          <span>
            <h1>S.B. PUBLIC SCHOOL</h1>
            <h4>Bhawanipur Jairampur Jaunpur</h4>
            <h5>Report Card 2021-22</h5>
          </span>
        </div>
      </div>
      <div className="main">
        <div className="row ro1">
          <div className="col-6 col-md-8"><h6>Name : {props.name}</h6>
          <h6>Roll No.: {props.roll}</h6>
        
          
          </div>
          <div className="col-6 col-md-4">
             
                  <h6>Class: {props.class}</h6>
                  
                  <h6>Grade: {grade}</h6>
             
          </div>
        </div>
        <div className="row ro1">
          <div className="col-2  co1">
          
          <div class="row ro2 p1" style={{ height:'67px' }}>
          <h6 style={{marginTop:"20px"}}>SUBJECT </h6>
         
          </div>
          
  
          <div class="row ro2 mg"><h6>Hindi</h6></div>
          
          <div class="row ro2 mg"><h6>English </h6></div>
          <div class="row ro2 mg"><h6>Grammar </h6></div>
          
          <div class="row ro2 mg"><h6>Math </h6></div>
          <div class="row ro2 mg"><h6>Science </h6></div>
          <div class="row ro2 mg"><h6>S.Science </h6></div>
       
          <div class="row ro2 mg"><h6>Computer </h6> </div>
          <div class="row ro2 mg"><h6>GK </h6> </div>
          <div class="row mg"><h6>Total </h6> </div>
          
          </div>


          
          <div className="col-5 col-md-5 co1">
              <div className="row">
                  <div className="col"> 
                 <div className="row" style={{borderBottom:"1px solid black"}}> <h6>Half Yearly Exam</h6></div>
                 <div className="row" style={{display:"flex" ,flexDirection:"row",borderBottom:"1px solid black"}}>
                  <div  style={{width:"20%", fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>
                     Max Marks
                       </div>
                  <div style={{width:"20%", fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>I Paper</div>
                  <div style={{width:"20%",  fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>II Paper</div>
                  <div style={{width:"20%",  fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>Practical</div>
                  <div style={{width:"20%",  fontWeight:"bold", fontSize:"0.78rem"}}>Total</div>
              </div>
              </div>
             </div>
             
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.hindi}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.hindi}</div>
              </div>
                 </div>
             </div>
             
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.english}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.english}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.grm}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.grm}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.math}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.math}</div>
              </div>
                 </div>
             </div>
           
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.comp}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.comp}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.sci}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.sci}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.ssci}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.ssci}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.gk}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.gk}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}><h6>400</h6></div>
                  <div style={{width:"20%"}}>{total}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}><h6>{total}</h6></div>
              </div>
                 </div>
             </div>
             

            </div>
          <div className="col-5 col-md-5">
              <div className="row">
                  <div className="col">
          <div className="row" style={{borderBottom:"1px solid black",textAlign:"center"}}> <h6>Annual Exam</h6></div>
              <div className="row" style={{display:"flex" ,flexDirection:"row",borderBottom:"1px solid black"}}>
                  <div  style={{width:"16.66%", fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>
                      Max Marks 
                       </div>
                  <div style={{width:"16.66%", fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>I Paper</div>
                  <div style={{width:"16.66%",  fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>II Paper</div>
                  <div style={{width:"16.66%",  fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>Pract ical</div>
                  <div style={{width:"16.66%",  fontWeight:"bold", borderRight:"1px solid black", fontSize:"0.78rem  "}}>Total</div>
                  <div style={{width:"16.66%",  fontWeight:"bold", fontSize:"0.78rem"}}>Grand Total</div>
              </div>
              </div>
          </div>
          <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.hindi}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.english}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.grm}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.math}</div>
              </div>
                 </div>
             </div>
           
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.comp}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.sci}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.ssci}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>50</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.gk}</div>
              </div>
                 </div>
             </div>
            
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}> <h6>400</h6></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}> <h6>{total}</h6> </div>
              </div>
                 </div>
             </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 " style={{borderBottom:"1px solid black"}}> <h6 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Personality Development</h6></div>
          
        </div>
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <h6 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Personal and social traits</h6></div>
          <div className="col-4 "> <h6 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Half yearly Exam</h6></div>
          <div className="col-4 "> <h6 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Annual Exam</h6></div>
        </div>
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Punctutality</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Punctual</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>-</p></div>
        </div>
       
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Discipline</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>Good</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>-</p></div>
        </div>
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Cleanliness</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>Social</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>-</p></div>
        </div>
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Behaviour</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>Responsible</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>-</p></div>
        </div>
        <div className="row" style={{borderBottom:"1px solid black"}}>
          <div className="col-4 ">  <p style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Other Activities</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>Tidy</p></div>
          <div className="col-4 "> <p style={{textAlign:"center",marginTop:"4px",marginBottom:"4px"}}>Tidy</p></div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="row" style={{height:"40px",textAlign:"center",paddingTop:"15px"}}>  <h6>Percentage: {perc}%</h6></div>
                <div className="row" style={{height:"40px",textAlign:"center",paddingTop:"15px"}}> <h6>Result: {result}</h6></div>
            </div>
          <div className="col-8">
              <div className="last"><h6> Principal Sign and School seal </h6> </div>
          </div>
          
        </div>
      </div>
     
      <div className="container" style={{margin:"auto auto",width:"50px",textAlign:"center",marginTop:"15px",marginBottom:"15px"}}>
      <button className="btn-danger px-5" id="butn"  onClick={handleprint}> <h2>Print</h2> </button>
      </div>
    </div>
  );
};
export default MainResult7;
