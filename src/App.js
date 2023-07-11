import './App.css';
import HeatmapPlotBox from './plots/HeatMapPlotBox';
import CircosPlot from './plots/CircosPlot';
import CustomPlot from './plots/CustomPlot'
import CountTiles from './plots/CountTiles';
import StackedBarPlot from './plots/StackedBarPlot';
import LineScatterPlot from './plots/LineScatterPlot';
import EmptyPlot from './plots/EmptyPlot';
import BoxPlot from './plots/BoxPlot';
import BoxPlotPerformance from './plots/BoxPlotPerformance';
import HeatmapPlot from './plots/HeatMapPlot';
import HeatmapWithGrid from './plots/heatmapWithGrid'
import BoxPlotWith2Color from './plots/BoxPlotWith2Color'

const allSamplePlots = [
  HeatmapPlot,
  BoxPlot,
  BoxPlotWith2Color
  // BoxPlotPerformance,
  // HeatmapWithGrid,
  // HeatmapPlotBox,
  // LineScatterPlot,
  // CircosPlot,
  // CustomPlot,
  // CountTiles,
  // StackedBarPlot,
  // StackedBarPlot
]

function App() {
  return (
    <div className="App" style={{background: 'black'}}>
      { allSamplePlots.map(Plot => {

        return (
          <div className='PlotContainer'>
            <Plot />
          </div>
        )
      })}
    </div>
  );
}

export default App;
