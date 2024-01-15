import { LinearProgress } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const ProgressBar = () =>{
    const progress = '50';
    return (

<div className='table-wrapper' >
<Grid className="grid-container" container spacing={10} width={'100%'} alignItems="center" height={'100%'} padding={'10px'} margin={'0px !important'}>
    <Grid className="item" item xs={2.4} paddingTop={'0px'} paddingBottom={'0px'}>
    <p style={{marginTop:'0'}}>Processing</p>
    <h3>3</h3>
    <LinearProgress variant="determinate" value={progress}
      sx={{
        backgroundColor: '#F7931E80',
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#F7931E'
        }
      }}
    />
    </Grid>
    <Grid className="item" item xs={2.3} paddingTop={'0px'} paddingBottom={'0px'}>
      <p style={{marginTop:'0'}}>Assigned</p>
      <h3>3</h3>
      <LinearProgress variant="determinate" value={progress}
      sx={{
        backgroundColor: '#7078DF80',
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#7078DF'
        }
      }}
    />
    </Grid>
    <Grid className="item" item xs={2.3} paddingTop={'0px'} paddingBottom={'0px'}>
    <p style={{marginTop:'0'}}>Picked-up</p>
    <h3>3</h3>
    <LinearProgress variant="determinate" value={progress}
      sx={{
        backgroundColor: '#00000080',
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#000000'
        }
      }}
    />
    </Grid>
    <Grid className="item" item xs={2.3} paddingTop={'0px'} paddingBottom={'0px'}>
    <p style={{marginTop:'0'}}>Delivered</p>
    <h3>3</h3>
    <LinearProgress variant="determinate" value={progress}
      sx={{
        backgroundColor: '#7AC94380',
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#7AC943'
        }
      }}
    />
    </Grid>
    <Grid className="item" item xs={2.3} paddingTop={'0px'} paddingBottom={'0px'}>
    <p style={{marginTop:'0'}}>Canceled</p>
    <h3>3</h3>
    <LinearProgress variant="determinate" value={progress}
      sx={{
        backgroundColor: '#E14D3680',
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#E14D36'
        }
      }}
    />
    </Grid>
  </Grid>

</div>
        )
    }
    export default ProgressBar;