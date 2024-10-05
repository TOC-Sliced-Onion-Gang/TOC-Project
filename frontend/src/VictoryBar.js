
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const fall = "Fall";
const winter = "Winter";
const spring = "Spring";
const summer = "Summer";

const sampleData = [
  {season: fall, people: 1500},
  {season: winter, people: 1200},
  {season: spring, people: 4000},
  {season: summer, people: 8000}
];

const App = () => {
    return (
      <div>
        <h1>Seasonal Population Chart</h1>
        <VictoryChart>
          <VictoryAxis
            tickFormat={sampleData.map(data => data.season)} // X-axis labels
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)} // Y-axis formatting
          />
          <VictoryBar
            data={sampleData}
            x = "season"
            y = "people"
            style={{
              data: {fill : "#c431a3"}
            }}
            /> 
        </VictoryChart>
        </div>
    )
};

export default App;