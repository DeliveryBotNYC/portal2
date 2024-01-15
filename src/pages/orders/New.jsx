import * as React from 'react'
import ReactDOM from "react-dom";
import '../dashboard/Table.css'
import './Orders.css'
import './Tracking.css'
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { makeStyles } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TrackingBar from '../../components/TrackingBar';
import Map2 from '../dashboard/Map';
import OrderTracking from './OrderTracking';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OrderInformation from './OrderInformation';


const New = () =>{
    
    return (
        <Grid className="grid-container" container spacing={2} width={'100%'}>
            <Grid className="item grid-scroll" item sm={12} height={'100%'}>
                
        <OrderInformation />
        
      </Grid>
      </Grid>
  )
    }
    export default New;