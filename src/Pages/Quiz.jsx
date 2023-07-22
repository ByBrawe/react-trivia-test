import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../Api/api";
import Questions from "../Components/Questions";


const Quiz = () => {
  const { difficulty } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [modal, setModal] = useState(false);
  const [yourAnswers, setYourAnswers] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const x = await data(difficulty);
      setQuestionData(x);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen  ">
      <div className="flex flex-col items-center justify-center bg-gray-800 w-[500px] h-[300px]  rounded-md text-white ">
      
        {isLoading? (<div>Loading...</div>) : 

        modal === false ? (
          <Questions
            questionData={questionData}
            count={count}
            setCount={setCount}
            point={point}
            setPoint={setPoint}
            modal={modal}
            setModal={setModal}
            yourAnswers={yourAnswers}
            setYourAnswers={setYourAnswers}
          />
        ) : (
          <div className="flex flex-col items-center justify-center  ">
            <div className="text-3xl">Result: {point}</div>

            <button
              className="border-2 p-1 m-6 rounded-md text-xs"
              onClick={() => navigate("/")}
            >
              Yeniden Başla
            </button>

            <div className="flex flex-col max-w-[400px] max-h-[150px] overflow-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200 scrollbar-thin  ">
              <h2 className="text-center text-lg text-red-400">Your Data</h2>
              <div>
                {yourAnswers.map((dt, key) => (
                  <div>
                    <div className="text-sm">
                      {key + 1}/10 - {dt.question}
                    </div>
                    <div className="text-xs">
                      <strong>Your Answers:</strong> {dt.your_answer}
                    </div>
                    <div className="text-xs">
                      <strong>Correct Answers:</strong> {dt.correct_answer}
                    </div>
                    <br></br>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Quiz;
