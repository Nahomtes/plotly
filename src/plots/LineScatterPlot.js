import React from "react";
import Plot from "react-plotly.js";

export default function LineScatterPlot() {
  let npoints = 180000
  let y = [];
  for (var i = 0; i < npoints; i++) {
    y.push(Math.random() * (1000-0)+0)
  }

  let x = [];
  for (var r = 0; r < npoints; r++) {
    x.push(r)
  }
  var trace1 = {
    x: x,
    y: y,
    mode: 'markers',
    type: 'scatter'
  };
  
  var data = [trace1]
  return <Plot data={data}/>
}

