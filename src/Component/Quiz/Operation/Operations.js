//Calculating Score...
export const calculateScore = (userAnswers,question)=>{
    const correctAnswers=question.map((question)=>question.answer);
    console.log(correctAnswers);
    let score =0;

    for(const questionId in userAnswers)
    { console.log(questionId);
      if(userAnswers[questionId] === correctAnswers[questionId - 1])
        {
          score++;
        }
    }

    return score;

}


//handle submit button
export  const handleSubmit=(setloading,timerIntervalId,answer,setScore,setStatus,setShowResult,question)=>
    {   
        window.scrollTo({top:0, behavior: "smooth"});
        setloading(true);
        clearInterval(timerIntervalId);

        setTimeout(() => {
           const quizScore=calculateScore(answer,question);
           setScore(quizScore);
           const percentage = (quizScore / question.length) *100;
           console.log(percentage);
           const newStatus= percentage >= 50 ? "Passed": "Failed";
           setStatus(newStatus);
           setShowResult(true);
           setloading(false);
        }, 2000);
    };
     
//formate Data
export const formateTime=(seconds)=>
    {
      const minutes= Math.floor(seconds / 60);
      const remainingSeconds= seconds % 60;
      const formatedTime= `${String(minutes).padStart(2,"0")}: ${String(remainingSeconds).padStart(2,"0")}`;
      return formatedTime;
    }