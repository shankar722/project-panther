import React, { useEffect, useState } from 'react'
import Dashcard from './components/dashcards/dashcard'
import Grid from '@mui/material/Grid2';
import { Box, Select, FormControl, MenuItem, InputLabel  } from '@mui/material/';
import SummaryChart from './components/summaryChart/summaryChart'
import TopSellingProducts from './components/topSellingProducts/topSellingProducts'
import ProductExposures from './components/productExposures/productExposures'
import PackageType from './components/packageType/packageType'
import GcChart from './components/gcChart/gcChart'
import CustomerChart from './components/customerChart/customerChart'

const Dashboard = () => {
  const [bu, setBu] = useState('Coffee')
  const [dashCardData, setDashCardData] = useState([
    { title: 'Opening Balance Cash Flow', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
    { title: 'Cash Flow from Business Ops', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
    { title: 'Cash Flow from Finance Ops', value: '$1.48 M', valueColor: '#A2D2FF', perc: '9.6', percDirection: 'top' },
    { title: 'Cash Flow from Investments', value: '$3.6 M', valueColor: '#D2B9DF', perc: '12.2', percDirection: 'top' },
    { title: 'Net Cash Flow', value: '$10.5 M', valueColor: '#ADC178', perc: '7.4', percDirection: 'top' }
  ])
  
  const onBuChange = (value) => {
    setBu(value);
    let newDashCardValue = [];
    switch (value) {
      case 'Cocoa':
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$6.2 M', valueColor: '#FFAFCC', perc: '2.9', percDirection: 'top' },
          { title: 'Cash Flow from Business Ops', value: '$5.22 M', valueColor: '#FFAFCC', perc: '3.1', percDirection: 'top' },
          { title: 'Cash Flow from Finance Ops', value: '$1.57 M', valueColor: '#A2D2FF', perc: '7.5', percDirection: 'bottom' },
          { title: 'Cash Flow from Investments', value: '$3.76 M', valueColor: '#D2B9DF', perc: '9.3', percDirection: 'bottom' },
          { title: 'Net Cash Flow', value: '$11.13 M', valueColor: '#ADC178', perc: '3.8', percDirection: 'top' }
        ];
        break;
      case 'Coffee':
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
          { title: 'Cash Flow from Business Ops', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
          { title: 'Cash Flow from Finance Ops', value: '$1.48 M', valueColor: '#A2D2FF', perc: '9.6', percDirection: 'top' },
          { title: 'Cash Flow from Investments', value: '$3.6 M', valueColor: '#D2B9DF', perc: '12.2', percDirection: 'top' },
          { title: 'Net Cash Flow', value: '$10.5 M', valueColor: '#ADC178', perc: '7.4', percDirection: 'top' }
        ];
        break;
      case 'Dairy':
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$4.95 M', valueColor: '#FFAFCC', perc: '2.3', percDirection: 'bottom' },
          { title: 'Cash Flow from Business Ops', value: '$5.83 M', valueColor: '#FFAFCC', perc: '3.1', percDirection: 'bottom' },
          { title: 'Cash Flow from Finance Ops', value: '$1.57 M', valueColor: '#A2D2FF', perc: '12.6', percDirection: 'top' },
          { title: 'Cash Flow from Investments', value: '$4.06 M', valueColor: '#D2B9DF', perc: '11.3', percDirection: 'top' },
          { title: 'Net Cash Flow', value: '$8.57 M', valueColor: '#ADC178', perc: '10.8', percDirection: 'top' }
        ];
        break;
      case 'Edible Nuts':
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$5.73 M', valueColor: '#FFAFCC', perc: '3.1', percDirection: 'top' },
          { title: 'Cash Flow from Business Ops', value: '$4.66 M', valueColor: '#FFAFCC', perc: '3.0', percDirection: 'top' },
          { title: 'Cash Flow from Finance Ops', value: '$1.6 M', valueColor: '#A2D2FF', perc: '13.6', percDirection: 'bottom' },
          { title: 'Cash Flow from Investments', value: '$3.74 M', valueColor: '#D2B9DF', perc: '18.0', percDirection: 'bottom' },
          { title: 'Net Cash Flow', value: '$11.17 M', valueColor: '#ADC178', perc: '10.9', percDirection: 'bottom' }
        ];
        break;
      case 'Spices':
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$4.58 M', valueColor: '#FFAFCC', perc: '1.9', percDirection: 'top' },
          { title: 'Cash Flow from Business Ops', value: '$4.69 M', valueColor: '#FFAFCC', perc: '1.7', percDirection: 'bottom' },
          { title: 'Cash Flow from Finance Ops', value: '$1.34 M', valueColor: '#A2D2FF', perc: '6.8', percDirection: 'bottom' },
          { title: 'Cash Flow from Investments', value: '$3.07 M', valueColor: '#D2B9DF', perc: '6.9', percDirection: 'bottom' },
          { title: 'Net Cash Flow', value: '$8.83 M', valueColor: '#ADC178', perc: '10.9', percDirection: 'bottom' }
        ];
        break;
      default:
        newDashCardValue = [
          { title: 'Opening Balance Cash Flow', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
          { title: 'Cash Flow from Business Ops', value: '$5.4 M', valueColor: '#FFAFCC', perc: '2.6', percDirection: 'top' },
          { title: 'Cash Flow from Finance Ops', value: '$1.48 M', valueColor: '#A2D2FF', perc: '9.6', percDirection: 'top' },
          { title: 'Cash Flow from Investments', value: '$3.6 M', valueColor: '#D2B9DF', perc: '12.2', percDirection: 'top' },
          { title: 'Net Cash Flow', value: '$10.5 M', valueColor: '#ADC178', perc: '7.4', percDirection: 'top' }
        ];
        break;
    }
    setDashCardData(newDashCardValue);
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex flex-column">
          <p className='mx-0 mt-0 mb-1 p-0 page-header'>📊 Cashflow Analytics & Forecasting</p>
          <p className='mx-0 mt-0 mb-3 p-0 page-desc'>Here is your report for August 2024</p>
        </div>

        <FormControl sx={{ m: 1, minWidth: 120, borderColor: '#fff' }} className='filter-dropdown'>
          <InputLabel id="demo-simple-select-helper-label" sx={{color: '#fff'}}>BU</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            value={bu}
            sx={{color: '#fff', borderColor: '#fff'}}
            onChange={(event) => onBuChange(event.target.value)}
          >
            <MenuItem value={'Coffee'}>Coffee</MenuItem>
            <MenuItem value={'Cocoa'}>Cocoa</MenuItem>
            <MenuItem value={'Edible Nuts'}>Edible Nuts</MenuItem>
            <MenuItem value={'Spices'}>Spices</MenuItem>
            <MenuItem value={'Dairy'}>Dairy</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2} className='flex-balloon d-flex flex-row dashboard-container'>
          {/** top row */}
          {dashCardData.map((cardData, index) => 
            <Grid size="grow">
              <Dashcard data={cardData} index={index} />
            </Grid>
          )}
          <Grid size={12}>
            <SummaryChart bu={bu} />
          </Grid>

          {/** full row table */}
          <Grid size={12}>
            <ProductExposures />
          </Grid>

          {/** old bottom row */}
          <Grid size={3}>
            <TopSellingProducts />
          </Grid>
          <Grid size="grow">
            <div className="d-flex flex-column" style={{gap: '1.1rem'}}>
              <GcChart />
              <CustomerChart />
            </div>
          </Grid>
          <Grid size={4}>
            <PackageType />
          </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
