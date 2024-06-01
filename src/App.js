import React from 'react';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';

const App = () => {
  return (
    <div className="App">
      <h1>Sentiment Analysis Visualizations</h1>
      <LineChartComponent />
      <PieChartComponent />
    </div>
  );
};

export default App;
