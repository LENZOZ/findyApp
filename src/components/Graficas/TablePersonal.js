import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Tables.css';

{/* Ejemplo de parametros para las tabla

    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
*/}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Rut', headerName: 'Rut', width: 110},
  { field: 'Nombre', headerName: 'Nombre', width: 130 },
  { field: 'Edad', headerName: 'Edad', width: 70 },
  { field: 'Telefono', headerName: 'Telefono', width: 130 },
  { field: 'Correo', headerName: 'Correo', width: 180 },
  { field: 'Cargo', headerName: 'Cargo', width: 130 },
];

{/*Cambiar por consultas sql*/}
const rows = [
  { id: 1, Rut: '124115345', Nombre: 'Juan', Edad: 25, Telefono: 12334653, Correo: 'Admin.2@gmail.com', Cargo: 'Admin' },
  { id: 2, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 3, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 4, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 5, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 6, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 7, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 8, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 9, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 20, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' },
  { id: 12, Rut: '204115345', Nombre: 'John', Edad: 20, Telefono: 94274653, Correo: 'Mesero.1@gmail.com', Cargo: 'Mesero' }
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
        checkboxSelection
        //checkboxSelection (Funciona para agregar checkbox al lateral de la tabla)
      />
    </div>
  );
}
