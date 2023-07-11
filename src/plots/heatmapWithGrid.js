import React from 'react';
import Plot from 'react-plotly.js';

class HeatmapWithCellBorder extends React.Component {
  render() {
    const zValues = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

    return (
      <Plot
        data={[
          {
            z: zValues,
            xgap: 4,
            ygap: 4,
            colorscale: [["#08a", "#08a"]],
            showscale: false,
            type: 'heatmap',
          },
          {
            z: zValues,
            xgap: 20,
            ygap: 20,
            colorscale: [["#000000", "#000000"]],
            showscale: false,
            type: 'heatmap',
          },
        ]}
        layout={{
          yaxis: {
            scaleanchor: "x",
          },
          plot_bgcolor: "#fff",
          width: 400,
          height: 400,
          margin: {
            b: 0, t: 20, l: 0, r: 20
          },
        }}
      />
    );
  }
}

export default HeatmapWithCellBorder;
