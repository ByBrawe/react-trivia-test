import axios from "axios";


const shuffleArray = (array) => {

    return [...array].sort(()=> Math.random() -0.5)

}



 const data = async(difficulty) => {

    const x = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`);
    const data = x.data
    return data.results.map( (dt)=>({
        ...dt,
        answer:  shuffleArray( [...dt.incorrect_answers, dt.correct_answer])
    }))
} 


export default data


