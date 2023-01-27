import './Statistics.styled.css';
import React from 'react';

export default function Statistics(props) {
  //console.log(Object.entries(props))
  return (
    <div>
      <ul className="Section">
        {Object.entries(props).map(titleStat => (
          <li key={titleStat} className="lastElem">
            <h6 className="title">
              {titleStat[0]}: {titleStat[1]}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

