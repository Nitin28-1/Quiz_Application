import React, { useState } from 'react'
import main from "/Images/Main.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading';

const Page1 = () => {

  const [loading,setLoading] = useState(false);
  const navigate=useNavigate();

  const handleStartQuiz =()=>
   {    
        setLoading(true);
        setTimeout( ()=>{ navigate(`/quiz/${0}`); setLoading(false); },1000);

   }


  return <>
    {loading && <Loading />}
    <div className='p-5 flex flex-col gap-8 md:flex-row md:p-[4%] lg:justify-evenly'>
   
   
     <div className=' flex flex-col gap-4 lg:w-[50%] '>
        <div>
            <h1 className='text-[3rem] font-bold font lg:text-[4rem]'>Daily Quiz, Daily Bonus- Play Today.</h1>
            <p className='font-semibold font-serif lg:text-[1.3rem]'>Play Daily Intresting Quiz. And Get Chance To Win Existing Prices.</p>
        </div>
        
      
        <button onClick={handleStartQuiz} className='bg-yellow-400 font-bold font-serif p-2 text-[1rem] rounded w-[40%]'>Play Today</button>
     </div>


     <div className='flex md:w-[50%]  lg:w-[50%] justify-center'>
        <img src={main} alt="" className='w-[100%] rounded md:w-[100%] lg:w-[70%]' />
     </div>
  
    </div>
  </>
}

export default Page1