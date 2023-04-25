import React from 'react';
import Plot from 'react-plotly.js';
import HeatMapData from './heatMapData.json'


function HeatmapPlotBox() {
  // Create random data for the heatmap
  const z = [];
  for (let i = 0; i < 10; i++) {
    z.push([]);
    for (let j = 0; j < 10; j++) {
      z[i].push(Math.random());
    }
  }

  // Create random data for the plot box
  const y = [];
  for (let i = 0; i < 100; i++) {
    y.push(Math.random());
  }

  // Create the heatmap trace
  const heatmapTrace = {
    z: z,
    type: 'heatmap',
    xaxis: 'x',
    yaxis: 'y',
  };

  // Create the plot box trace
  const plotBoxTrace = {
    y: y,
    type: 'box',
    boxpoints: 'all',
    xaxis: 'x2',
    yaxis: 'y',
  };
    // Create the plot box trace
    const plotBoxTrace2 = {
      y: y,
      type: 'box',
      boxpoints: 'all',
      xaxis: 'x2',
      yaxis: 'y',
    };

  // Create the layout
  const layout = {
    title: 'Heatmap and Plot Box',
    grid: {rows: 1, columns: 2},
    xaxis: {domain: [0, 0.45], anchor: 'y'},
    xaxis2: {domain: [0.55, 1], anchor: 'y'},
    yaxis: {anchor: 'x'},
  };

  // Create the data array
  const data = [plotBoxTrace2, heatmapTrace, plotBoxTrace, plotBoxTrace2];

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default HeatmapPlotBox;


// const data2 = [
//   {"name": "Acute Lymphoblastic Leukemia  (Dataset = TARGET, Specimen = Pediatric Primary Tumors, N = 538)", 
//   "y": [118.48, 214.22, 0.25, 100.31, 190.5, 1123.35, 1346.05], "type": "box", 
//   "marker": {"color": "red", "line": { color: 'black',
//   width: 1,
//   dash: 'dashdot', }}}, 
// ];

// const heatMapData = HeatMapData
// const heatMapLayout = {
//   title: 'My Heatmap',
//   xaxis: {
//     title: 'X Axis Label',
//   },
//   yaxis: {
//     title: 'Y Axis Label',
//   },
// };

//   // Create random data for the heatmap
//   const z = [];
//   for (let i = 0; i < 10; i++) {
//     z.push([]);
//     for (let j = 0; j < 10; j++) {
//       z[i].push(Math.random());
//     }
//   }

//   // Create random data for the plot box
//   const y = [];
//   for (let i = 0; i < 100; i++) {
//     y.push(Math.random());
//   }

//   // Create the heatmap trace
//   const heatmapTrace = {
//     z: z,
//     type: 'heatmap',
//   };

//   // Create the plot box trace
//   const plotBoxTrace = {
//     y: y,
//     type: 'box',
//     boxpoints: 'all',
//   };

//   // Create the data array
//   const dataForBoxAndHM = [heatmapTrace, plotBoxTrace];

//   // Create the layout
//   const layoutForBoxAndHM = {
//     title: 'Heatmap and Plot Box',
//   };