import React, { useEffect, useState } from 'react'
import { QuizData } from '../../Quiz/DataForQuiz/QuizData';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  
  const [question,setQuestion] = useState([]);
  const navigate=useNavigate()

  useEffect(()=>{
   
  const fetchedData=async()=>
  {
     const fetchedData=await QuizData(0,true);
     setQuestion(fetchedData);
  }

  fetchedData();

  return ;

  },[]);

  const gotoQuiz=(index)=>
  {
     navigate(`/quiz/${index}`); 

  }  

  return (
    <div className='w-[100%] h-[80%] mt-10 flex flex-col items-center '>

       <div className='w-[100%] flex justify-center'>
        <h1 className='text-[2.5rem] font-bold text-blue-800'>Top Quizes!</h1>
       </div>

       <div className=' mb-10 mt-10 bg-[#00A7AD] p-5 rounded  flex flex-col gap-4 flex-wrap  mx-6  sm:flex-row'>

        {  
         
          question.map((question,index)=>(

            <div className='w-[200px] h-[250px] rounded bg-slate-200 flex items-center justify-evenly  flex-col'>

              <div className='w-[100%] h-[70%] flex flex-col items-center '>

              <h1 className='text-[1.5rem] font-semibold up'>Quiz {index+1 }</h1>
              <p className='p-3 text-[1.5rem] font-semibold font-serif uppercase'>{`${(question.title).slice(0,20)}...`}</p> 

              </div>
              
              <button className='bg-yellow-400 font-bold font-serif p-2 text-[1rem] rounded w-[80%]' onClick={()=> gotoQuiz(index)}>Play Today</button>
              

            </div>
          ))
        }


       </div>
      



    </div>
  )
}

export default Page2