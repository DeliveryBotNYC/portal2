import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Margin } from '@mui/icons-material';
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


const TotalOrders = () =>{
    
    return (
<div className='table-wrapper'>
<Grid className="grid-container" container spacing={2} width={'100%'} alignItems="center" height={'100%'} margin={'0px !important'}>
    <Grid className="item" item xs={4}>
        <LocalShippingIcon style={{width:'25%', height:"25%"}} />
        <h3 style={{margin:'5px 0px 0px 0px'}}>374</h3> 
        <p style={{margin:'0px'}}> Total Orders</p>
    </Grid>
    <Grid className="item" item xs={8}>
   <div></div>
    </Grid>
    </Grid>
    </div>
        )
    }
    export default TotalOrders;