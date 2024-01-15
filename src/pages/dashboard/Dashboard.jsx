import './Dashboard.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Maps from './Map';

import RecentOrders from './RecentOrders';
import ProgressBar from './ProgressBar';
import TotalOrders from './TotalOrders';

const Dashboard = () =>{
    
    return (
<Grid className="grid-container" container spacing={2} width={'100%'}>
    <Grid className="item" item xs={12} md={9} height={'15%'} minHeight={'120px'}>
      <ProgressBar />
    </Grid>
    <Grid className="item" item xs={12} md={3} height={'15%'} minHeight={'120px'}>
      <TotalOrders />
    </Grid>
    <Grid className="item" item xs={12} height={'40%'} position={'relative'} minHeight={'360px'}>
      <RecentOrders/>
    </Grid>
    <Grid className="item" item xs={12} height={'45%'}>
      <Maps  />
    </Grid>
  </Grid>
        )
    }
    export default Dashboard;