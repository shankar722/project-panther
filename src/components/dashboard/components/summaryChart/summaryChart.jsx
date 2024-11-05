import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material/';
import Grid from '@mui/material/Grid2';
import Chart from 'chart.js/auto';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const SummaryChart = ({ bu }) => {
  const [dailyChartData, setDailyChartData] = useState([65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 83, 83, 83]);
  const [weeklyChartData, setWeeklyChartData] = useState([90, 110, 110, 95, 95, 75, 75, 90, 90, 110, 110, 97, 97, 110, 110, 95]);

  const displayLabels = (type) => {
    const labels = new Array();
    // const startValue = type === 'weekly' ? 1 : 0
    const maxValue = type === 'weekly' ? 16 : 60
    for (let i = 0; i <= maxValue; i++) {
      let labelText = '';
      if (type === 'weekly') {
        labelText = 'Week';
        if (i % 2 !== 0) continue;
      }
      else {
        labelText = 'Day';
        if (i % 6 !== 0) continue;
      }
      labels.push(`${labelText} ${i}`);
    }
    return labels;
  }

  const displayvalues = () => {
    const values = new Array();
    for (let i = 1; i <= 16; i++) {
      values.push(i);
    }
    return values;
  }

  useEffect(() => {
    switch (bu) {
      case 'Cocoa':
        setDailyChartData([75, 90, 90, 70, 70, 55, 55, 90, 90, 80, 80, 100, 100, 93, 93, 93])
        setWeeklyChartData([100, 120, 120, 105, 105, 85, 85, 100, 100, 120, 120, 107, 107, 120, 120, 105])
        break;
      case 'Coffee':
        setDailyChartData([65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 83, 83, 83])
        setWeeklyChartData([90, 110, 110, 95, 95, 75, 75, 90, 90, 110, 110, 97, 97, 110, 110, 95])
        break;
      case 'Dairy':
        setDailyChartData([55, 70, 70, 50, 50, 35, 35, 70, 70, 60, 60, 80, 80, 73, 73, 73])
        setWeeklyChartData([80, 100, 100, 85, 85, 65, 65, 80, 80, 100, 100, 87, 87, 100, 100, 85])
        break;
      case 'Edible Nuts':
        setDailyChartData([45, 60, 60, 40, 40, 25, 25, 60, 60, 50, 50, 70, 70, 63, 63, 63])
        setWeeklyChartData([70, 90, 90, 75, 75, 55, 55, 70, 70, 90, 90, 77, 77, 90, 90, 75])
        break;
      case 'Spices':
        setDailyChartData([35, 50, 50, 30, 30, 15, 15, 50, 50, 40, 40, 60, 60, 53, 53, 53])
        setWeeklyChartData([60, 80, 80, 65, 65, 45, 45, 60, 60, 80, 80, 67, 67, 80, 80, 65])
        break;
      default:
        setDailyChartData([65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 83, 83, 83])
        setWeeklyChartData([90, 110, 110, 95, 95, 75, 75, 90, 90, 110, 110, 97, 97, 110, 110, 95])
        break;
    }

    const weeklyChartEl = document.getElementById('week-line-chart');
  const dailyChartEl = document.getElementById('daily-line-chart');
  const weeklyChart = new Chart(weeklyChartEl, {
    type: 'line',
    data: {
      labels: displayLabels('weekly'),
      datasets: [
        {
          label: 'Weekly',
          data: weeklyChartData,
          borderWidth: 3,
          backgroundColor: '#009CDD',
          borderColor: '#009CDD',
        },
      ]
    },
    options: {
      plugins: {  // 'legend' now within object 'plugins {}'
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#fff",
            beginAtZero: false,
          }
        },
        x: {
          beginAtZero: false,
          ticks: {
            color: "#fff",
            beginAtZero: false
          }
        },
      }
    }
  });

  const dailyChart = new Chart(dailyChartEl, {
    type: 'line',
    data: {
      labels: displayLabels(),
      datasets: [
        {
          label: 'Daily',
          data: dailyChartData,
          borderWidth: 3,
          backgroundColor: '#009CDD',
          borderColor: '#009CDD',
        },
      ]
    },
    options: {
      plugins: {  // 'legend' now within object 'plugins {}'
        legend: {
          labels: {
            color: "#fff"
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#fff",
            beginAtZero: false,
          }
        },
        x: {
          beginAtZero: false,
          ticks: {
            color: "#fff",
            beginAtZero: false
          }
        },
      }
    }
  });

    return () => {
      weeklyChart.destroy();
      dailyChart.destroy();
    }
  }, [bu])

  const [count, setCount] = useState(0)

  return (
    <Grid container spacing={2} className="d-flex align-items-center">
      <Grid size={6}>
        <Card className='custom-card p-3'>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="cardTitle m-0 p-0">Week wise Cash Flow</p>
            <MoreHorizOutlinedIcon className='cursor-pointer' />
          </div>
          <canvas id="week-line-chart"></canvas>
        </Card>
      </Grid>

      <Grid size={6}>
        <Card className='custom-card p-3'>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="cardTitle m-0 p-0">Day wise Cash Flow</p>
            <MoreHorizOutlinedIcon className='cursor-pointer' />
          </div>
          <canvas id="daily-line-chart"></canvas>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SummaryChart
