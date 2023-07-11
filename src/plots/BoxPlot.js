import React, { useState } from 'react';
import Plot from 'react-plotly.js';

import Data from '../data/boxData.json'

const CustomModeBarButton = () => (
  <button>
    <span className="custom-icon">+</span>
  </button>
);

export default function BoxPlot() {
  const [showYAxisValues, setShowYAxisValues] = useState(true);

  const toggleYAxisValues = () => {
    console.log("showYAxisValues: ", showYAxisValues)
    setShowYAxisValues(showYAxisValues ? false : true );
    console.log("After: showYAxisValues: ", showYAxisValues)
  };
  const data = Data
  const layout = {
    showlegend: false, 
    height: 700,
    width: 1000,
    xaxis: {
      showgrid: true, // these lines show the gridlines for the axes
      tickangle: 45,
      showline: true,  // Set to true to display x-axis line
      zeroline: true,  // Set to true to display x-axis zero line
      tickfont: {
        size: 8 // Set the desired fontsize
      },
      showticklabels: showYAxisValues
    },
    margin: {
      t: 100, // add margin to accommodate the rotated x-axis label
      l: 100,
      r: 250,
      b: 350
    },
    title: {
      text: 'ALK (ENSG00000171094)<br>Pediatric primary only tumor gene expression',
      xref: 'paper',
      x: 0
    },
    yaxis: {
      title: 'TPM',
      // type: 'log',
      showline: true,  // Set to true to display x-axis line
      zeroline: true,  // Set to true to display x-axis zero line
      tickfont: {
        size: 10 // Set the desired fontsize
      },
    },
    
    /*shapes: [
      {
        type: 'line',
        xref: 'x',
        yref: 'paper',
        x0: 1,
        y0: 0,
        x1: 1,
        y1: 1,
        line: {
          color: 'red',
          width: 2,
          dash: 'dash'
        }
      }
    ]*/
  };
  var config = {
    responsive: true,
    renderer: 'webgl', // Enable WebGL rendering
    modeBarButtonsToAdd: [
      {
        name: 'Hide X-Axis',
        icon: {
          path: CustomModeBarButton,
        },
        click: () => {
          console.log('hello, X-Asis is hidden');
          toggleYAxisValues()
        },
      },
    ],
  }

  return ( 
    <Plot 
      data={data}
      layout={layout}
      config={config}
      className='box'
    /> 
  )
}
