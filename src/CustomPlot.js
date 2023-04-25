import React from 'react';
import Plot from 'react-plotly.js';

export function CustomPlot() {
  // Define the data for the custom plot
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 20, 30, 40, 50],
      type: 'custom',
      marker: {
        size: 10,
        color: 'red'
      }
    }
  ];

  // Define the layout for the custom plot
  const layout = {
    title: 'Custom Plot Example',
    xaxis: {
      title: 'X Axis',
      range: [0, 6]
    },
    yaxis: {
      title: 'Y Axis',
      range: [0, 60]
    }
  };

  // Create the custom plot
  return <Plot data={data} layout={layout} />;
}
