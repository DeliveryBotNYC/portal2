import * as React from 'react'
import ReactDOM from "react-dom";
import './Table.css'

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
    driver: 'Lowes Hone',
    eta: '4:23 PM',
    status: 'Assigned',
  },
  {
    id: 'DBXA92E8AD',
    name: 'Yuab Kinkor',
    address: '382 W 87 St',
    driver: 'Lowes Hone',
    eta: '4:38 PM',
    status: 'Assigned',
  },
  {
    id: 'DBX3R8EA39',
    name: 'Linsley Jacobs',
    address: '81 West End Av',
    driver: 'Wilson Popes',
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
    header: () => 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('driver', {
    header: () => 'Driver',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('eta', {
    header: 'Status',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => info.getValue(),
  }),
]



const RecentOrders = () =>{
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className='table-wrapper table'>
        <h3>Recent Orders</h3>
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
      <b className='viewall'>View all</b>
      </div>
  )
    }
    export default RecentOrders;