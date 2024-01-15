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
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'



const defaultData  = [
  {
    id: 'DBX03D98A',
    name: 'John Doe',
    address: '438 Rockwell pl',
    timeframe: '4 PM - 6 PM',
    eta: '4:23 PM',
    status: 'Assigned',
  },
  {
    id: 'DBXA92E8AD',
    name: 'Yuab Kinkor',
    address: '382 W 87 St',
    timeframe: '4 PM - 6 PM',
    eta: '4:38 PM',
    status: 'Assigned',
  },
  {
    id: 'DBX3R8EA39',
    name: 'Linsley Jacobs',
    address: '81 West End Av',
    timeframe: '3 PM - 5 PM',
    eta: '4:40 PM',
    status: 'Picked-up',
  },
]

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('id', {
    header: () => 'Order',
    cell: ({ row, getValue }) => ( <div style={{padding: '0px 10%', textAlign: 'start'}}><div style={{float: 'left'}}>{getValue()} <br></br><b2>{row.original.name}</b2></div> <div style={{float: 'right', width: '100px'}}><span class="dot"></span>{row.original.status}</div></div>),
  }),
]



const Tracking = () =>{
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]
    const [globalFilter, setGlobalFilter] = React.useState('')
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
    })
    
    return (
        <Grid className="grid-container" container spacing={2} width={'100%'}>
            <Grid className="item grid-scroll" item sm={0} md={3} height={'100%'}>
        <div className='table-wrapper table'>
        <div className='table-header' alignItems="center">
            <TextField
                label="Search..."
                sx={{ mb: "0.5rem", width: "80%" }}
                variant="standard"
                onChange={value => setGlobalFilter(String(value))}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
      <table width={'100%'}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </Grid>
      <Grid className="item grid-scroll" item sm={11} md={9} height={'100%'}>
      
        <TrackingBar/>
        <Accordion className='Accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Map</Typography>
          </AccordionSummary>
          <AccordionDetails style={{height:'500px', padding:0}}>
            <Map2 style={{borderRadius: '30px !important'}}/>
          </AccordionDetails>
        </Accordion>

        <Accordion className='Accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Order tracking</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <OrderTracking />
          </AccordionDetails>
        </Accordion>

        <OrderInformation />
        
      </Grid>
      </Grid>
  )
    }
    export default Tracking;