import React from 'react'
import { formateTime } from './Operation/Operations'
    
const QuizHeader = ({Timer,title}) => {
  return (
 
    <div className='w-[100%] flex  justify-evenly items-center gap-5 mt-4 '>
        <div className='w-[60%] gap-2'>

        <p className='text-[1rem] ml-2 md:text-[2rem] font-semibold'><span className='text-red-500'>Topic:</span> {title}</p>
       
        </div>


   <div className='w-[110px] p-1 h-[50%]  items-center justify-center  flex  flex-col gap-3 text-[1rem] font-bold bg-yellow-400 rounded md:w-[200px] md:text-[1rem] mr-2'>
   <h1 className='text-green-700'>{formateTime(Timer) }</h1>
   <p className='text-[0.8rem]'>Time Consumed..</p>

   </div>
     
    </div>



  )
}

export default QuizHeader