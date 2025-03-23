import { useEffect, useState } from "react";
import style from "./assets/Quiz/Quiz.module.css"
function Result(prop){
 const[res,setres]=useState("Fail")
  const retakehandler=()=>{
  prop.setcompleted(0)

  }
  useEffect(()=>{
    if(prop.answer==8)
     setres("Pass")
    else if(prop.answer>8 && prop.answer<=12)
        setres("Good")
    else if(prop.answer>12 && prop.answer<=16)
        setres("Very Good")
    else if(prop.answer>16 && prop.answer<=20)
        setres("Excellent")
    else{
        setres("Fail")
    }
  },[])
    return(<>
   <table className={style.container}>
    <h1>Result:-{res}</h1>
    <h2 >Correct answer : {prop.answer} out of 20</h2>
    <h2 >Score:{prop.answer*5}%</h2>
    <button onClick={retakehandler} class="retake">Retake</button>
    </table>
    </>)
}
export default Result;