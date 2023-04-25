import React from 'react';
import Plot from 'react-plotly.js';

export function CircosPlot() {
  const data = [
    {
      type: 'scatterpolar',
      r: [1, 2, 3, 4, 5],
      theta: [0, 72, 144, 216, 288],
      mode: 'markers',
      marker: {
        color: ['red', 'green', 'blue', 'orange', 'purple'],
        size: [10, 20, 30, 40, 50],
        opacity: 0.5
      }
    }
  ];

  const layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 6]
      }
    },
    showlegend: false
  };

  return <Plot data={data} layout={layout} />;
}
