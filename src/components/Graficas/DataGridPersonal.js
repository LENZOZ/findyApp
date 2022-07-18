import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id_personal', headerName: 'ID' },
  { field: 'nombre', headerName: 'Nombre', width: 100 },
  { field: 'telefono', headerName: 'Teléfono', width: 100 },
  { field: 'correo', headerName: 'Correo', width: 100 },
  { field: 'rut', headerName: 'Rut', width: 100 },
  { field: 'cargo', headerName: 'Cargo', width: 100 },
]

const DatagridPersonal = () => {

    const [tableData, setTableData] = useState([])
  
    useEffect(() => {


      
      fetch("http://localhost:3001/api/personal/1")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
  
    console.log(tableData)
  
    return (
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
          getRowId={(row) => row.id_personal}
        />
      </div>
    )
  }
  
  export default DatagridPersonal