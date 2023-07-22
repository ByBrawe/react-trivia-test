import React, { useEffect, useState } from 'react'

const Questions = ({questionData,count, setCount, point, setPoint, setModal,yourAnswers,setYourAnswers }) => {

const [timer, setTimer] = useState(30)


    const userAnswer = (e) => {

        // console.log('e.currentTarget.value:', e.target.value);

            setYourAnswers((prevanswers) => [...prevanswers, {
                question : questionData[count].question,
                correct_answer : questionData[count].correct_answer,
                your_answer: e.target.value
            }])

   
      
       

        setCount(count + 1)


        if (e.currentTarget.value === questionData[count]?.correct_answer) {
            setPoint(point + 100);
          
        }

        if(count >= 9){

            setModal(true)

        }
        setTimer(30)
        
    }

    useEffect(()=>{

        const interval = setInterval(()=>{

            if(timer > 0){
                setTimer(timer - 1)
            }

            if(timer === 0 && count < 10 ){
                setCount(count + 1)
                setTimer(30)
            }else if(count >= 10){

                setModal(true)

            }
            

        },1000)

        return () => {
            clearInterval(interval)
        }

    },[timer]) 

    // useEffect(()=>{
    //     console.log(yourAnswers)
    // },[yourAnswers])

  return (

    <>
     <div className='rounded-full h-9 w-9 p-1 bg-black border-2 text-center '>{timer}</div>
     <div className='flex w-2/3 h-1/3 text-1xl'>
        <div className=''>{count+1}/10 - {questionData[count]?.question}</div> 
     </div>
     <div className='flex flex-wrap w-3/5 justify-between'>
            
            {questionData[count]?.answer.map((dt,key)=> (
                <button onClick={userAnswer} value={dt} className='w-2/5 m-2 border-2 rounded-sm text-sm hover:bg-red-500'>{dt}</button>
            ))}
                   
     </div>
    </>
  )
}

export default Questions