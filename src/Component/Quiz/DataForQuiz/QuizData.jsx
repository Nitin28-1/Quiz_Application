import { firestore } from '../../../Config/Firebase';  // Adjust path as per your project structure
import { collection, getDocs } from 'firebase/firestore';

export const QuizData= async (questionNo,check)=>
{
    try {
        const quizzesCollectionRef = collection(firestore, 'quizzes'); // Replace 'quizzes' with your collection name

        // Get all documents from the 'quizzes' collection
        const querySnapshot = await getDocs(quizzesCollectionRef);

        let fetchedData = [];
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
       
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        
        if(check === true)
        {
          const newArray= fetchedData.map((quiz,index)=>(
           quiz
          ));
          
          return newArray;
        }

        else{
        console.log(fetchedData[0]);
        return fetchedData[questionNo];
        }

        
   
      }
       catch (error) {
        console.error('Error fetching data from Firestore:', error.message);
       
      }
}