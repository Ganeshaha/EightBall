import React, { useState } from 'react';

import './EightBall.css';

function EightBall(answers) {
  let answerObj = { msg: "Think of a question", color: "black" };
  
  
  //console.log(answers);
  const [answer, setAnswer]= useState("Think of a question test");
  const [color, setColor]= useState("black");
  
  
  function handleClick(answers){

    answerObj = answers.answers.answers[Math.floor(Math.random()*answers.answers.answers.length)];
   // color = answerObj.color;
    console.log(answerObj);
    
    //answerObj =answers[Math.floor(Math.random()*answers.length)];
   // answerObj =;
    
    console.log(answerObj.color)
    setAnswer(answerObj.msg); 
    setColor(answerObj.color); 
    
  }
  //setAnswer(answer); 
  return (
    <div className="circle" style={{backgroundColor: color}} onClick={() => handleClick({answers})}>

     <div className= "question">{answer}</div> 
    </div>
  );
}

export default EightBall;
