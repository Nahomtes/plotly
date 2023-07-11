import React from 'react';
import Plot from 'react-plotly.js';

const MyPlot = () => {
  // Generate random data for box plot
  const generateRandomData = (numPoints, numOutliers) => {
    const data = [];

    // Generate random values for the box plot
    const boxValues = [];
    for (let i = 0; i < numPoints; i++) {
      boxValues.push(Math.random() * 10);
    }
    data.push(boxValues);

    // Generate random values for the outliers
    const outlierValues = [];
    for (let i = 0; i < numOutliers; i++) {
      outlierValues.push(Math.random() * 20);
    }
    data.push(outlierValues);

    return data;
  };

  // Set the number of points and outliers for testing
  const numPoints = 10000;
  const numOutliers = 100000;

  // Generate the random data
  const data = generateRandomData(numPoints, numOutliers);

  return (
    <Plot
      data={[
        {
          type: 'box',
          y: data[0],
          name: 'Box Plot',
          boxpoints: 'outliers',
          jitter: 0.3,
          whiskerwidth: 0.2,
          marker: {
            size: 2,
          },
          boxmean: true,
          outlierpoints: 'all',
        },
        {
          type: 'scattergl',
          y: data[1],
          mode: 'markers',
          name: 'Outliers',
        },
      ]}
      layout={{
        title: `Box Plot Performance Test (${numPoints} Points, ${numOutliers} Outliers) `,
        showlegend: false,
      }}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default MyPlot;
