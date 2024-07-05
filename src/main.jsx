import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Quiz from './Component/Quiz/Quiz.jsx';
import CreateQuiz from './Component/CreateQuiz/CreateQuiz.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path:"/",
      element:<Home/>
     },
     {
      path:"/quiz/:id",
      element:<Quiz/>
     },
     {
      path:"/createQuiz",
      element: <CreateQuiz/> 
     }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

     <RouterProvider router={router} />
)
