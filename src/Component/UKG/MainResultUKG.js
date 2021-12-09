import React,{useState,useEffect} from 'react'
import "./MainResultUKG.css";
import { useLocation } from "react-router-dom";
import logo from "../img/img.jpeg";


const MainResultUKG = () => {
  const location = useLocation();
  const props = location.state;
  console.log(props);
  const [total, settotal] = useState(0);
  const [perc, setperc] = useState(0);
  const [grade, setgrade] = useState("");
  const[result,setresult]= useState("Passed");
  useEffect(()=>{
      let x=Number(props.hindi)+Number(props.english)+Number(props.math)+Number(props.hindi_o)+Number(props.art)+Number(props.english_o)+Number(props.math_o)+Number(props.conv)+Number(props.sports);
    settotal(x);
    let per=((x/500)*100).toFixed(2);
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
          <div class="row ro2 mg"><h6>Hindi-Oral </h6></div>
          <div class="row ro2 mg"><h6>English </h6></div>
          <div class="row ro2 mg"><h6>English-Oral </h6></div>
          <div class="row ro2 mg"><h6>Math </h6></div>
          <div class="row ro2 mg"><h6>Math-Oral </h6></div>
          <div class="row ro2 mg"><h6>Art </h6></div>
          <div class="row ro2 mg"><h6>Conversation </h6> </div>
          <div class="row ro2 mg"><h6>Sports </h6> </div>
          <div class="row mg"><h6>Total </h6> </div>
          
          </div>


          
          <div className="col-5 col-md-5 co1">
              <div className="row">
                  <div className="col"> 
                 <div className="row" style={{borderBottom:"1px solid black"}}> <h6>Half Yearly Exam</h6></div>
                 <div className="row" style={{display:"flex" ,flexDirection:"row",borderBottom:"1px solid black"}}>
                  <div   style={{width:"20%", fontWeight:"bold", fontSize:"0.78rem", borderRight:"1px solid black"}}>
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
                  <div style={{width:"20%" }}>100</div>
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
                  <div style={{width:"20%" }}>25</div>
                  <div style={{width:"20%"}}>{props.hindi_o}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.hindi_o}</div>
              </div>
                 </div>

             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>100</div>
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
                  <div style={{width:"20%" }}>25</div>
                  <div style={{width:"20%"}}>{props.english_o}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.english_o}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>100</div>
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
                  <div style={{width:"20%" }}>25</div>
                  <div style={{width:"20%"}}>{props.math_o}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.math_o}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.art}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.art}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>25</div>
                  <div style={{width:"20%"}}>{props.conv}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.conv}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}>50</div>
                  <div style={{width:"20%"}}>{props.sports}</div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}></div>
                  <div style={{width:"20%"}}>{props.sports}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
             <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"20%" }}><h6>500</h6></div>
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
                  <div style={{width:"16.66%"}}>{props.hindi_o}</div>
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
                  <div style={{width:"16.66%"}}>{props.english_o}</div>
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
                  <div style={{width:"16.66%"}}>{props.math_o}</div>
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
                  <div style={{width:"16.66%"}}>{props.art}</div>
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
                  <div style={{width:"16.66%"}}>{props.conv}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}>100</div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}></div>
                  <div style={{width:"16.66%"}}>0</div>
                  <div style={{width:"16.66%"}}>{props.sports}</div>
              </div>
                 </div>
             </div>
             <div className="row mg1">
                 <div className="col">
                 <div className="row" style={{display:"flex" ,flexDirection:"row"}}>
                  <div style={{width:"16.66%" }}> <h6>500</h6></div>
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
export default MainResultUKG;
