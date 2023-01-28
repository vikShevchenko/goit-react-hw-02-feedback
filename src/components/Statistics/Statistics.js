import './Statistics.styled.css';
import React from 'react';

export default function Statistics(props) {
  //console.log(Object.entries(props))
  return (
    <div>
      <ul className="ulSection">
        {Object.entries(props).map(titleStat => (
          <li key={titleStat} className="lastElem">
           
              {titleStat[0]}: {titleStat[1]}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

