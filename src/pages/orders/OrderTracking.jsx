import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './OrderTracking.css';



const OrderTracking = () =>{
    
    return (
<Grid className="grid-container" container spacing={2} width={'100%'}>
    <Grid className="item" item md={12} lg={4}>
      <b2 id="show_all">Show all updates</b2>
      <ul className='date'>
        <li>Jan 22 <br></br> 05:14 PM</li>
        <li>Jan 22<br></br>05:14 PM</li>
        <li>Jan 22<br></br>05:14 PM</li>
        <li>Jan 22<br></br>05:14 PM</li>
        <li>Jan 22<br></br>05:14 PM</li>
      </ul>
      <ul className='tracking'>
        <li>Arrived at Store</li>
        <li>Driver Assigned</li>
        <li>Advanced Route Assigned</li>
        <li>Added to Route #1392</li>
        <li>Order Processing</li>
      </ul>

    </Grid>
  </Grid>
        )
    }
    export default OrderTracking;