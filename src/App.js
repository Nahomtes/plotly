import './App.css';
import Plot from 'react-plotly.js';
import HeatmapPlotBox from './HeatMapPlotBox';
import Data from './boxData.json'
import { CircosPlot } from './CircosPlot';
import { CustomPlot } from './CustomPlot'
import { CountTiles } from './CountTiles';
import { StackedBarPlot } from './StackedBarPlot';

function App() {
  const data = Data
  
  const layout = {
    showlegend: false, 
    height: 1000,
    width: 1000,
    xaxis: {tickangle: 45},
    margin: {
      t: 100, // add margin to accommodate the rotated x-axis label
      l: 100,
      r: 100,
      b: 500
    },
    title: 'ALK (ENSG00000171094) Pediatric primary only tumor gene expression',
    yaxis: {
      title: 'Value (log10)',
      type: 'log'
    }
  };
  var config = {responsive: true}

 

  return (
    <div className="App">
      {/* Box Plot */}
      <Plot data={data} layout={layout} config={config} className='box'/> 
      {/* Circos Plot */}
      <CircosPlot />
      {/* Heatmap Plot */}
      <HeatmapPlotBox />

      <CustomPlot />
      <CountTiles />
      <StackedBarPlot />

    </div>
  );
}

export default App;
