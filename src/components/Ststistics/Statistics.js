import './Statistics.styled.css';
import React from 'react';

export default function Statistics(props) {
  const title = ['Good', 'Neutral', 'Bad', 'Total'];
  return (
    <div>
      <ul className="Section">
        {title.map(titleStat => (
          <li key={titleStat}>
            <h5 className="title">
              {titleStat}: {props.statDat[titleStat]}
            </h5>
          </li>
        ))}
      </ul>
      <div className="feetback">
        <p>Positive Feetback: </p>
        {props.statDat.positivePercentage ? (
          props.statDat.positivePercentage
        ) : (
          <p>0</p>
        )}
        <p>%</p>
      </div>
    </div>
  );
}

