import { ref, set } from "firebase/database";
import { firestore } from "../../../Config/Firebase";
import { collection, addDoc } from 'firebase/firestore';

const UploadQuiz =async (question,title) => {
  
    const  formattedData ={
        title:title,
        questions:question.map((q,index)=>({
            id:index+1,
            question:q.questionText,
            options:q.options,
            answer:q.answer,
        }
    ))
    };

    try {
        const quizzesCollectionRef = collection(firestore, 'quizzes'); // Replace 'quizzes' with your collection name
  
        // Add a new document with a generated ID
        await addDoc (quizzesCollectionRef, formattedData);
  
        console.log('Data uploaded successfully to Firestore!');
      } catch (error) {
        console.error('Error uploading data to Firestore:', error.message);
      }
     
}

export default UploadQuiz