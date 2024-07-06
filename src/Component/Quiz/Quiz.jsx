
import React, { useEffect, useState } from 'react'
import ScoreCard from './ScoreCard';
import {useNavigate, useParams} from "react-router-dom"
import Loading from '../Home/Loading';
import QuizHeader from './QuizHeader';
import {handleSubmit,formateTime} from "./Operation/Operations"
import { QuizData } from './DataForQuiz/QuizData';

const Quiz = () => {
  const { id } = useParams();
  const [question,setQuestion]=useState([]);
  const [answer,setAnswer]=useState({});
  const [showResult,setShowResult]=useState(false);
  const [score,setScore]=useState(0);
  const [loading,setloading]=useState(false);
  const [Timer,setTimer]=useState(60);
  const [timerIntervalId,setTimeIntervalId]=useState('');
  const [status,setStatus]=useState("");
  const navigate= useNavigate();
  const [title,setTitle]=useState('')
  const [dataFetching,setDataFetching]=useState(false);

   useEffect(()=>{

   const interValId= setInterval(()=>{
    setTimer((prevTimer)=> prevTimer -1);
  },1000);
  
 
  setTimeIntervalId(interValId);
  

  return ()=>{
     clearInterval(interValId);

      if(Timer === 0)
      { RestartQuiz();
        alert("Time Is Out Cliclk OK To Play Again..");
        
      }  
    }

   },[Timer]);

   useEffect(()=>{
    const fecthData=async()=> 
      {
        setDataFetching(true);
         const fecthedData=await QuizData(id,false);
         console.log(fecthedData);
         setQuestion(fecthedData.questions);
         setTitle(fecthedData.title);
         console.log(fecthedData)
         setDataFetching(false);
        
      }
    
     fecthData();
   },[])

   const handleAnswerSelect=(questionId,selectedOption)=>
    {
        const updatedAnswer = {...answer , [questionId]: selectedOption};
        clearInterval(timerIntervalId);
        setAnswer(updatedAnswer);
        
    }
    
    

    const RestartQuiz=()=>{
      setAnswer({});
      setScore(0);
      setShowResult(false);
      setloading(false);
      setTimer(60);
      navigate(`/quiz/${id}`);

    }

  return ( <section>
      
      <QuizHeader Timer={Timer} title={title} className="w-[100%]"/>

      {loading && <Loading data={"Score Is Calculateing..."}/>} 
      {dataFetching && <Loading data={"Data Fetching..."}/>} 

      {showResult === true && <div className='w-[100%]  flex  justify-center absolute z-10 '>
        
        <ScoreCard  status={status} score={score} RestartQuiz={RestartQuiz} formateTime={formateTime} Timer={Timer}
        question={question}/>

      </div>  }

    <div className='w-[90%] relative my-3 mx-auto md:mx-[10%] '>

     <div className='w-[100%] flex flex-col gap-5 md:w-[90%] '>
    { 
        question.map((question,index) => (
            <div key={question.id} className='w-[100%] py-4 px-4 shadow-sm border border-gray-200 rounded'>

             <div className='flex gap-3  rounded text-xl p-1 cursor-pointer w-[100%] '>
               
               <div >
                <span className='h-10 w-10 bg-yellow-400 rounded-[50%] flex items-center justify-center text-black  '>{index + 1}</span>
                </div>
                <span className=' text-[17px] md:text-[22px]'>{question.question} </span>
            </div>
       
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                {
                  question.options.map((option,index)=>(
                    
                    <div onClick={()=> handleAnswerSelect(question.id, option)}  key={index} className={`border p-2 border-gray-200 rounded text-sx cursor-pointer 
                    ${answer[question.id] === option? "bg-gray-300 " : ' '} `}>

                     <p className='text-[10px] font-bold mb-1 md:text-[14px] md:font-semibold'> Option {index + 1}</p>
                     <p className='md:text-[18px] md:font-semibold md:font-sans'>{option}</p>

                    </div>
                  ))
                } 
          </div>
          

        </div>
        ))
    }

    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 w-[200px] " onClick={()=>{handleSubmit(setloading,timerIntervalId,answer,setScore,setStatus,setShowResult,question)}}>Submit Quiz</button>
    
   </div>

      </div>

  </section>
   
  )
}

export default Quiz