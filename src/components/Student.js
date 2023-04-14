// Renders the student's name & bio properties
// Renders a <Score> component for each score object in the student's scores property.

import Score from "./Score";
import React from "react";

export default function Student(props) {
  const arrScores = props.scores.map((exam, i) => {
    return <Score key={i} date={exam.date} score={exam.score} />;
  });

  return (
    <div className="studentInfo">
      <div className = 'whatStudent'>
        <h3>Student:</h3>
        <h2> {props.name}</h2>
      </div>

      <div className = 'bioDiv'>
        <h3>Bio: </h3>
        <p>{props.bio}</p>
      </div>

      <div className = 'scoresDiv'>
        <h3>Scores:</h3>
        <p>{arrScores}</p>
          </div>
          
    </div>
  );
}
