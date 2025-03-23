import { useRef, useState } from 'react';
import Question from '../questions.json';
import right from '../correct.png';
import wrong from '../wrong1.png';
import style from '../Quiz/Quiz.module.css';
import Result from '../../Result';
 //alert(Question.length) 547
function Quiz(){
  const selectedoptionA=useRef()
  const selectedoptionB=useRef()
  const selectedoptionC=useRef()
  const selectedoptionD=useRef()
   
    const[correct,setcorrect]=useState("");
    const[index,setindex]=useState(0)
    const[Que,setque]=useState(Question[index])
    const[rightanswer,setrightanswer]=useState(0)
    const[completed,setcompleted]=useState(false)
    //useEffect(()=>{setque(Question[1])})
    //console.log(Que.question);
  

    const clickhandlernext=(z)=>{
      const citext=document.getElementById("correctincorrecttext").style
      if(index<=18){
       // console.log(Question[index]);      
        setindex(index+1)
        setque(Question[index])
        
      }
      if(index==18)
        document.querySelector("#next").style.visibility="hidden"
      
        selectedoptionA.current.style.backgroundColor="transparent";
        selectedoptionB.current.style.backgroundColor="transparent";
        selectedoptionC.current.style.backgroundColor="transparent";
        selectedoptionD.current.style.backgroundColor="transparent";
        document.getElementById("A").src=""
        document.getElementById("B").src=""
        document.getElementById("C").src=""
        document.getElementById("D").src=""
        citext.visibility="hidden"
    }
    
    const clickhandlerprev=()=>{
      const citext=document.getElementById("correctincorrecttext").style
      if(index>=1){
        //console.log(index) 
        setindex(index-1)
        setque(Question[index])
      }
    
     
       document.querySelector("#next").style.visibility="visible"
      selectedoptionA.current.style.backgroundColor="transparent";
      selectedoptionB.current.style.backgroundColor="transparent";
      selectedoptionC.current.style.backgroundColor="transparent";
      selectedoptionD.current.style.backgroundColor="transparent";
      document.getElementById("A").src=""
      document.getElementById("B").src=""
      document.getElementById("C").src=""
      document.getElementById("D").src=""
      citext.visibility="hidden"
    }
    function selectoptionhandler(ans,z){
      const citext=document.getElementById("correctincorrecttext").style  
 
      if(ans==Que.answer)
       { 
        if(Que.visit==0)
        setrightanswer(rightanswer+1)
        setcorrect("Correct")
        citext.visibility="visible" //default color=green
        citext.color="rgb(7, 235, 7)"
       //z.current.__reactProps$2jbnk814pkl.children[3].props.src={right}
      } 
      else{
        setcorrect("Incorrect")
        citext.visibility="visible" 
        citext.color="red"
      }
      Que.visit=1;
      
      if(Que.answer=="A"){
        
        document.getElementById("A").src=right
        document.getElementById("B").src=wrong
        document.getElementById("C").src=wrong
        document.getElementById("D").src=wrong
        selectedoptionA.current.style.backgroundColor="lightgreen";
        selectedoptionC.current.style.backgroundColor="#ff704d";
        selectedoptionB.current.style.backgroundColor="#ff704d";
        selectedoptionD.current.style.backgroundColor="#ff704d";
      }
      else if(Que.answer=="B"){
        
        document.getElementById("A").src=wrong
        document.getElementById("B").src=right
        document.getElementById("C").src=wrong
        document.getElementById("D").src=wrong
        selectedoptionA.current.style.backgroundColor="#ff704d";
        selectedoptionB.current.style.backgroundColor="lightgreen";
        selectedoptionC.current.style.backgroundColor="#ff704d";
        selectedoptionD.current.style.backgroundColor="#ff704d";
      }
      else if(Que.answer=="C"){
       
        document.getElementById("A").src=wrong
        document.getElementById("B").src=wrong
        document.getElementById("C").src=right
        document.getElementById("D").src=wrong
        selectedoptionA.current.style.backgroundColor="#ff704d";
        selectedoptionB.current.style.backgroundColor="#ff704d";
        selectedoptionC.current.style.backgroundColor="lightgreen";
        selectedoptionD.current.style.backgroundColor="#ff704d";
      }
      else if(Que.answer=="D"){
        
        document.getElementById("A").src=wrong
        document.getElementById("B").src=wrong
        document.getElementById("C").src=wrong
        document.getElementById("D").src=right
        selectedoptionA.current.style.backgroundColor="#ff704d";
        selectedoptionB.current.style.backgroundColor="#ff704d";
        selectedoptionC.current.style.backgroundColor="#ff704d";
        selectedoptionD.current.style.backgroundColor="lightgreen";
      }
    }
      
 const submithandler=()=>{
  //alert(rightanswer)
  setcompleted(true)
  setindex(0)
 }

    
    return(
        <>
      { completed ?<Result answer={rightanswer} setcompleted={setcompleted}/>:
        <table className={style.container}>
        <h1 className={style.head}>Quiz</h1>
        <h3 className={style.questiontext}>{index+1}. {Que.question}</h3>
        <h4 onClick={()=>selectoptionhandler("A",selectedoptionA)}  ref={selectedoptionA} className={style.option}>A. {Que.A} <img id="A" className={style.correct} src={""}  /> </h4>
        <h4 onClick={()=>selectoptionhandler("B",selectedoptionB)}  ref={selectedoptionB} className={style.option}>B. {Que.B} <img id="B" className={style.correct} src={""} /> </h4>
        <h4 onClick={()=>selectoptionhandler("C",selectedoptionC)}  ref={selectedoptionC} className={style.option}>C. {Que.C} <img id="C" className={style.correct} src={""} /> </h4>
        <h4 onClick={()=>selectoptionhandler("D",selectedoptionD)}  ref={selectedoptionD} className={style.option}>D. {Que.D} <img id="D" className={style.correct} src={""} /> </h4>
        <h5 id='correctincorrecttext' className={style.correctincorrecttext}>{correct}</h5>
        <button id='prev' onClick={clickhandlerprev} className={style.nextprev}> Prev</button>
        <button  className={style.submit} onClick={submithandler}>Submit</button>
        <button id='next' onClick={clickhandlernext} className={style.nextprev}>Next </button>
        </table>}
        
        </>)
    
}
export default Quiz;