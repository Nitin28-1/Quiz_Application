import React from 'react'
import { formateTime } from './Operation/Operations';

const ScoreCard = ({status,score,RestartQuiz,formateTime,Timer,question}) => {
  return (
    <div className='w-[280px] border border-b-3 rounded 
    flex flex-col items-center gap-3 realtive z-20 bg-purple-400 p-2 sm:w-[60%] lg:w-[500px] '>
        
        <h1 className='text-[2rem] font-semibold font-serif text-white sm:text-[2.5rem]'>Your Socre...</h1>
        <h3 className={`text-[1.5rem] sm:text-[2rem] font-semibold ${status == "Passed" ? "text-green-600" : "text-red-500"}`}>{status}</h3>

        <h1 className='text-[2rem] sm:text-[2.5rem] font-bold text-white'>{score * 10 }<span>/{question.length * 10}</span></h1>

        <p className='text-[1rem] sm:text-[1.5rem] font-sans font-bold text-white' >Total Time : {formateTime(60 -Timer )} <span>sec..</span></p>
     
     <button onClick={RestartQuiz} className='text-[1.5rem] sm:text-[2rem] border-2  rounded  px-2  '>Restart</button>
    </div>
  )
}

export default ScoreCard;