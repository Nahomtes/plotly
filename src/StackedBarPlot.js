import React from 'react';
import Plot from 'react-plotly.js';

export function StackedBarPlot() {
  // Define the data for the stacked bar plot
  const data = [
    {
      x: ['All Cohorts', 'GMKF', 'TARGET'],
      y: [10, 20, 30],
      type: 'bar',
      name: 'Group 1'
    },
    {
      x: ['All Cohorts', 'GMKF', 'TARGET'],
      y: [20, 30, 40],
      type: 'bar',
      name: 'Group 2'
    },
    {
      x: ['All Cohorts', 'GMKF', 'TARGET'],
      y: [5, 10, 15],
      type: 'bar',
      name: 'Group 3'
    }
  ];

  // Define the layout for the stacked bar plot
  const layout = {
    title: 'Stacked Bar Plot Example',
    xaxis: {
      title: 'Cohort'
    },
    yaxis: {
      title: 'Percent Copy Number',
      autorange: true,
      type: 'linear',
      exponentformat: 'e'
    },
    barmode: 'stack'
  };

  // Create the stacked bar plot
  return <Plot data={data} layout={layout} />;
}
