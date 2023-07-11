import React from 'react';
import Plot from 'react-plotly.js';
import Data from '../data/heatMapData2.json' // ALK
import tData_ALK from '../data/DifferentialExpression-ENSG00000171094.json'
import dData_neuroblastoma from '../data/DifferentialExpression-EFO_0000621.json'
import dData_Top_Down_Regulated_Genes from '../data/Top-down-regulated-genes-DifferentialExpression-EFO_0000621.json'
import tData_BRAF from '../data/DifferentialExpression-ENSG00000157764.json'
import dData_RhabdoidTumorOfTheKidney from '../data/DifferentialExpression-EFO_1000512.json'

const Comparator = (a, b) => a < b ? -1 : a > b ? 1 : 0;

class Heatmap extends React.Component {
  render() {
    // Your data
    const data = Data;
    data.sort((a, b) =>  Comparator(b.yAxisLabel, a.yAxisLabel));

    // data.map((a, b)=> {return console.log(a.xAxisLabel)})


    console.log("data: ", data)

    const diffExpHeatmapTitle = "ALK (ENSG00000171094)<br>Differential Expression comparing pediatric primary tumors vs GTEx normal adult tissues"


    const xValues = data.map(d => d.xAxisLabel);
    const yValues = data.map(d => d.yAxisLabel);
    console.log("yValues: ", yValues)
    /* 
    This is the array of z-values for your heatmap, 
    which are mapped from your data to create the heatmap color gradient.
    */
    const zValues = data.map(d => d.log2FoldChange);

    const CUSTOM_BLUE = '#0071b2'
    const CUSTOM_ORANGE = '#e69d00'

    let minLog2FoldChange = Infinity;
    let maxLog2FoldChange = -Infinity;

    for (const item of data) {
      if (item.log2FoldChange < minLog2FoldChange) {
        minLog2FoldChange = item.log2FoldChange;
      }
      if (item.log2FoldChange > maxLog2FoldChange) {
        maxLog2FoldChange = item.log2FoldChange;
      }
    }
    // Create an array of objects for sorting the x-axis and y-axis labels together
    const sortedData = data.map((d, index) => ({
      x: xValues[index],
      y: yValues[index],
      z: zValues[index],
    }));

    sortedData.sort((a, b) => b.y - a.y );


    const sortedXValues = sortedData.map(d => d.x);
    const sortedYValues = sortedData.map(d => d.y);
    const sortedZValues = sortedData.map(d => d.z);
    console.log("Sorted yValues: ", sortedYValues)


    return (
      <Plot
        data={[
          {
            x: sortedXValues,
            y: sortedYValues,
            z: sortedZValues,
            xgap: 2,
            ygap: 2,
            type: 'heatmap',
            // zmin: minLog2FoldChange,
            // zmax: maxLog2FoldChange,
            /* 
              This is an array of arrays that maps a normalized z-value to a specific color. 
              It sets the color gradient of your heatmap.
            */
            // colorscale: [[0, '#56B4E9'], [0.5, 'white'], [1, '#E69F00']],
            colorscale: [[0, CUSTOM_BLUE], [0.5, 'white'], [1, CUSTOM_ORANGE]],
            showscale: true,
            colorbar: {
              title: 'Log2 gene expression<br>fold change',
              titleside: 'top',
              tickmode: 'array',
              // tickvals: [Math.ceil(minLog2FoldChange), 0, Math.floor(maxLog2FoldChange/2), Math.floor(maxLog2FoldChange)],
              len: 0.3
            },
          },
        ]}
        layout={{
          // plot_bgcolor: "black",
           width: 1800, height: 1200,
           title: {
            text: diffExpHeatmapTitle,
            xref: 'paper',
            x: .1 
           },
           margin: {
            t: 50, // add margin to accommodate the rotated x-axis label
            l: 500,
            r: 300,
            b: 450
          },
          border: {
            
          },
          padding:{ 
            r: 0
          },
          autosize: false,
          xaxis: {
            showgrid: true, // these lines show the gridlines for the axes
            constrain: "domain",
            tickangle: 45,
            showline: true,  // Set to true to display x-axis line
            zeroline: false,  // Set to true to display x-axis zero line
            tickfont: {
              size: 10 // Set the desired fontsize
            },
          },
          yaxis: {
            showgrid: true, // these lines show the gridlines for the axes
            showline: true,  // Set to true to display x-axis line
            tickfont: {
              size: 10 // Set the desired fontsize
            },
            scaleanchor: "x" // y-axis is scaled to the x-axis to ensure that the squares in the heatmap will always be perfect squares
          }
        }}
          
      />
    );
  }
}

export default Heatmap;
