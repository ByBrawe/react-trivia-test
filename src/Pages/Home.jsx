import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../Components/Dropdown'

const Home = () => {

    const [select, setSelect] = useState("")
    const difficultyData = ["select","easy", "medium", "hard"]


    const navigate = useNavigate()
    console.log(select)
    
    const startQuiz = () => {
        navigate(`/quiz/${select}/10`)
    }

  return (

    <div className='flex items-center justify-center h-screen'>
    
        <div className='flex flex-col items-center justify-center bg-gray-800 w-[500px] h-[300px]  rounded-md text-white'>
                <div className='h-1/3 text-5xl'>Trivia Quiz Game</div>
                <div className='h-1/5 text-black'><Dropdown difficultyData={difficultyData} setSelect={setSelect}  /></div>
                <div onClick={startQuiz} className='w-1/5 h-7 text-white text-center cursor-pointer bg-indigo-800 rounded-md hover:bg-indigo-950'>
                   Başla
                </div>
        </div>
    
    </div>
  )
}

export default Home