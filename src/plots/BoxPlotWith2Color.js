import React from 'react';
import Plot from 'react-plotly.js';

export default function BoxPlotExample() {
  const data = [
    {
      y: [1, 2, 3, 4, 5],  // Data for the first box plot
      type: 'box',
      name: 'Box Plot 1'
    },
    {
      y: [2, 4, 6, 8, 10],  // Data for the second box plot
      type: 'box',
      name: 'Box Plot 2'
    }
  ];

  return (
    <Plot
      data={data}
      layout={{ title: 'Two Types of Box Plots' }}
      config={{ responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
      onInitialized={(figure) => console.log(figure)}
      onUpdate={(figure) => console.log(figure)}
    />
  );
};
