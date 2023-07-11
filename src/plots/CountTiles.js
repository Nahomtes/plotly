import React from 'react';
import Plot from 'react-plotly.js';

export default function CountTiles() {
  // Define the data for the count tiles
  const data = [
    {
      x: ['Category 1', 'Category 2', 'Category 3'],
      y: [10, 20, 30],
      type: 'bar',
      marker: {
        color: 'blue'
      }
    }
  ];

  // Define the layout for the count tiles
  const layout = {
    title: 'Count Tiles Example',
    xaxis: {
      title: 'Category'
    },
    yaxis: {
      title: 'Count'
    }
  };

  // Create the count tiles
  return <Plot data={data} layout={layout} />;
}
