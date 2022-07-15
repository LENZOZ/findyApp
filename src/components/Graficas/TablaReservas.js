import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import './Tables.css';


const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'mesa', headerName: 'N°Mesa', width: 110},
  { field: 'cliente', headerName: 'Cliente', width: 130 },
  { field: 'telefono', headerName: 'Contacto', width: 130 },
  { field: 'pedido', headerName: 'Pedido', width: 200 },
  { field: 'fecha', headerName: 'Fecha del pedido', width: 130 },  
];

{/*Cambiar por consultas sql*/}
const rows = [
  { id: 1, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 2, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 3, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 4, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 5, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 6, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },
  { id: 7, mesa: '10', cliente: 'Juan', telefono: 12334653, pedido: '2 mojitos; 1 Pizza Napolitana; 3 Empanadas', Cargo: 'Admin', fecha: '10-04-2022' },

];



export default function DataTable() {
  return (
    <div style={{ height: 550, width: '100%'}}>
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
