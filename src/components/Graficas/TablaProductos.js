import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Tables.css';



const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'nombre', headerName: 'Nombre', width: 130},
  { field: 'tipo', headerName: 'Tipo de producto', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 100 },
  { field: 'precio', headerName: 'Precio', width: 100 }
];

{/*Cambiar por consultas sql*/}
const rows = [
  { id: 1, nombre: 'Cola de mono', tipo: 'Cocktail', stock: 10, precio: 6000 },
  { id: 2, nombre: 'Mojito', tipo: 'Cocktail', stock: 20, precio: 5000 },
  { id: 3, nombre: 'Pisco', tipo: 'Cocktail', stock: 30, precio: 5500 },
  { id: 4, nombre: 'Pizza', tipo: 'Comida', stock: 12, precio: 13000 },
  { id: 5, nombre: 'Papas Fritas', tipo: 'Comida', stock: 23, precio: 7000 },
  { id: 6, nombre: 'Chorrillana', tipo: 'Comida', stock: 18, precio: 8000 },
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
