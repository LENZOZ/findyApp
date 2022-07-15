import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Tables.css';



const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'mesa', headerName: 'N°Mesa', width: 110},
  { field: 'sector', headerName: 'Sector', width: 110 },
  { field: 'capacidad', headerName: 'Capacidad', width: 110 }
];

{/*Cambiar por consultas sql*/}
const rows = [
  { id: 1, mesa: 10, sector: 'Fumadores', capacidad: 8 },
  { id: 2, mesa: 11, sector: 'Interior', capacidad: 4 },
  { id: 3, mesa: 12, sector: 'Interior', capacidad: 6 },
  { id: 4, mesa: 13, sector: 'Fumadores', capacidad: 12 },
];



export default function DataTable() {
  return (
    <div style={{ height: 550, width: '100%' }}>
    <DataGrid
      className='dtable'
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
