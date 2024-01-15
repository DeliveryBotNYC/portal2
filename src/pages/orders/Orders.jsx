import * as React from 'react'
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import '../dashboard/Table.css'
import './Orders.css'
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { makeStyles } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';

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
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => 'Customer',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('address', {
    header: () => 'Address',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('timeframe', {
    header: () => 'Time-frame',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('eta', {
    header: 'ETA',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => info.getValue(),
  }),
]



const Orders = () =>{
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
    const navigate = useNavigate();

    return (
        <div className='table-wrapper table'>
        <div className='table-header' alignItems="center">
            <TextField
                label="Search..."
                sx={{ mb: "0.5rem", width: "30rem" }}
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
            <IconButton className='new-order-button'onClick={() => navigate('new')} >
                <AddIcon/>
                <div>
                New order
                </div>
            </IconButton>
            <Avatar className='round-button'>
                <UploadIcon />
            </Avatar>
            <Avatar className='round-button'>
                <DownloadIcon />
            </Avatar>
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
            <tr key={row.id} onClick={() => navigate('tracking')}>
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
  )
    }
    export default Orders;