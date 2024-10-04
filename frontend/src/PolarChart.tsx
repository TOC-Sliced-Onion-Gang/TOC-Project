import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import ApexOptions type

const PolarChart: React.FC = () => {
  const series: number[] = [14, 23, 21, 17, 15, 10, 12, 14]; // Data points

  // Use the ApexOptions type for chartOptions
  const chartOptions: ApexOptions = {
    chart: {
      type: 'polarArea',
      height: 350, // Set height for the chart
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G', 'Team H'], // Labels for each data point
    fill: {
      opacity: 0.8, // Set opacity for the fill
    },
    stroke: {
      width: 1, // Stroke width for the segments
      colors: ['#fff'], // Stroke color
    },
    yaxis: {
      show: false, // Hide the y-axis
    },
    legend: {
      position: 'bottom', // Position of the legend
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0, // No stroke for the rings
        },
        spokes: {
          strokeWidth: 0, // No stroke for the spokes
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true, // Enable monochrome theme
        shadeTo: 'light', // Shade to light
        shadeIntensity: 0.6, // Intensity of shading
      },
    },
  };

  return (
    <div>
      <h2>Polar Area Chart</h2>
      <ReactApexChart options={chartOptions} series={series} type="polarArea" height={350} />
    </div>
  );
};

export default PolarChart;
