import React, { useState } from 'react'
import Question from './Question'
import UploadQuiz from './UploadQuiz/UploadQuiz';
import Loading from '../Home/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CreateQuiz = () => {
   
   const [question,setQuestion]=useState([
    {id:1,questionText:"",options:["", "", "",""],answer:""},
   ])
   const [loading,setLoading]=useState(false);
   const [title,setTitle]=useState('');

   const addNewQuestion=()=>(
    setQuestion([...question,{id:question.length+1,questionText:"",options:[ '', '','',''],answer:""}])
   );

   const deleteQuestion=(id)=>
    {
       const UpdatedValue=question.filter((question)=>
       question.id !== id
      );
     
      const newValue=UpdatedValue.map((q,index)=>(
         {...q,id:index+1}
      ))
    
      setQuestion(newValue);
      
    }

    const updateData=(id,updatedData)=>
    {
       setQuestion(question.map((q)=> (q.id === id ? updatedData : q  )));
    }
  
   const handleTitleText=(value)=>
   {
      setTitle(value);
   }

   const UploadedData=async ()=>
   {   
      setLoading(true);
      await UploadQuiz(question,title);
      setLoading(false);
      toast("Quiz Created Successfully",{
         position:"top-right"
      });
    
   }

  return (
    <>
     {loading && <Loading data={"Uploading Quiz...."}  />}

    <div className='p-4 flex flex-col gap-3   md:items-center'>
       
       <div className='flex border-2 border-gray-200 p-3 gap-4 rounded md:w-[70%]'>

        <h1 className='text-[1.5rem] font-semibold'>Quiz Title: </h1>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Title Of Quiz'
         value={title}
         onChange={(e)=> handleTitleText(e.target.value)}
        />       
       </div>

      <div className='flex flex-col gap-4 md:w-[70%]'>
       {question.map((q)=>(
  
          <Question question={q} 
           deleteQ={deleteQuestion}
           updatedata={updateData}
          />
         
       ))
      }
      </div>
      
      <div className='w-[100%] flex items-center justify-around md:w-[70%]  '>
      <button onClick={addNewQuestion} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 md:text-[20px]  ">ADD NEW QUESTION</button>

      <button type="button" className={`text-[21px]  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:text-[20px] ${loading && "cursor-progress" } `} onClick={UploadedData} >Create Quiz</button>
      
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default CreateQuiz