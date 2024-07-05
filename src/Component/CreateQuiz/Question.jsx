import React, { useEffect, useState } from 'react'

const Question = ({question,deleteQ,updatedata}) => {
  
    const [questionText,setQuestionText] = useState(question.questionText);
    const [options,setOptions]=useState(question.options);
    const [answer,setAnswer]=useState(question.answer);

    useEffect(() => {
      setQuestionText(question.questionText);
      setOptions(question.options);
      setAnswer(question.answer);
    }, [question]);

     const handleQuestionText=(value)=>
      {
        setQuestionText(value);
        updatedata(question.id,{...question, questionText:value});

      }


     const handleOptionChange =(index,value)=>
    {
       const newOption= options.map((option,i)=>(
        i === index ? value : option
       ));    
     
         setOptions(newOption);
         updatedata(question.id,{...question,options:newOption});
    }


    const handleAnswerText=(value)=>
      {
        setAnswer(value);
        updatedata(question.id,{...question, answer:value});

      }
   


  return (
    <div className='w-[100%] flex flex-col gap-4 border-2 rounded  
    border-slate-300'>

      <div className='flex items-center gap-3 px-2 pt-2'>
      <span className='font-semibold'>Question {question.id}</span>

      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Question Here'

      value={questionText}
      onChange={(e)=> handleQuestionText(e.target.value)}
      />     
      </div>


     <div>
        {options.map((option,index)=>(
           <div className='flex items-center gap-2 p-2'>
            <span>Option {index + 1}</span>

            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Valid Options'
             key={index}
             value={option}
             onChange={(e)=> handleOptionChange(index,e.target.value)}
            />     
           </div>
           
        ))}

    </div>

        <div className='flex items-center p-2 gap-3'>
            <h2>Correct Answer</h2>

            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Answer For Above Question'
             value={answer}
             onChange={(e)=> handleAnswerText(e.target.value)}
            
            />     
        </div>

     
       <div>
        <button type="button" className="text-[20px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-3 md:text-[20px] " onClick={()=>deleteQ(question.id)} >Delete Question</button>
        </div>
    </div>
  )
}

export default Question