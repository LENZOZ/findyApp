import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Tables.css';
import { useEffect, useState} from "react";
import PersonalArray from '../Apis/personalArray';

/* Ejemplo de parametros para las tabla

    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
*/
/* Se obtienen y setean los datos de sesión */

  
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Rut', headerName: 'Rut', width: 110},
  { field: 'Local', headerName: 'Local', width: 110},
];

const personal = <PersonalArray/>

console.log(personal)

/*Cambiar por consultas sql*/
let rows = [
  {id: 1, Rut: '124115345', Nombre: 'Juan', Edad: 25, Telefono: 12334653, Correo: 'Admin.2@gmail.com', Cargo: 'Admin' }
];
let rows2 = [
  {id: 2, Rut: '124115345', Local: 1, Edad: 25, Telefono: 12334653, Correo: 'Admin.2@gmail.com', Cargo: 'Admin' }
];
var datos= {id: 1, Rut: '124115345', Nombre: 'Juan', Edad: 25, Telefono: 12334653, Correo: 'Admin.2@gmail.com', Cargo: 'Admin' };
  rows2.push(datos);
export default function DataTable() {
 // console.log("veces");
 

  
 // console.log(rows2)
  /*{personal.map((p) => (
    
    

  ))}*/


  return (
    <div style={{ height: 550, width: '100%' }}>
     <DataGrid 
        className='dtable'
        rows={rows2}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        //checkboxSelection
        //checkboxSelection (Funciona para agregar checkbox al lateral de la tabla)
      />
    </div>
  );
}
