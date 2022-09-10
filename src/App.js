import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

const [questionnum,setQuestion]=useState(0);
const [score,setScore]=useState(0);
const [show,setShowscore]=useState(false);
const nextquestion=(option)=>{
if (option===true){
const newscore=score+1;
setScore(newscore)
}
const nextque=questionnum+1;
if(nextque<questions.length){
  
  setQuestion(nextque);}
  else{
    setShowscore(true);
  }
  
}
const refreshPage=()=>{
  window.location.reload(false);
}
	return (
		<div className='app'>
			{show ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          
      <button className="newbutton" onClick={refreshPage} >RESTART</button>
    
				</div>
        
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {questionnum + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[questionnum].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[questionnum].answerOptions.map((answerOption) => (
							<button onClick={() => nextquestion(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}