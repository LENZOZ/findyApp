import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


{/* Se crea la data de la tabla interna... creo ʕ´•ᴥ•`ʔσ” */}
function createData(categoria, tipo) {
  return {
    categoria,
    tipo,
    history: [
      {
        date: 'Cola de mono',
        customerId: 'Trago tipico de algun lugar',
        amount: 2500,
      },
      {
        date: 'Mojitos',
        customerId: 'Muy ricos :D',
        amount: 5050,
      },
    ],
  };
}

function internData(nombre,descripcion,valor){
    return{
        nombre,
        descripcion,
        valor
    }
}

const Cell = [
    createData('Cola de mojo', 'Trago tipico de algun lugar', 10000),
    createData('Mojitos', 'Muy ricos :D', 5000),
  ];


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>

        {/* Tabla externa */}
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* Datos de categorias */}
        <TableCell component="th" scope="row">
          {row.categoria}
        </TableCell>
        {/* Datos de numero de productos */}
        <TableCell align="center">{row.tipo}</TableCell>
      </TableRow>

        {/* Encabezado tabla interna */}
      <TableRow>

        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Productos
              </Typography>

            {/* Tabla interna */}
              <Table size="small" aria-label="purchases">
                {/* Encabezados */}
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell align="right">Valor ($)</TableCell>
                  </TableRow>
                </TableHead>

                {/* Datos de productos por categoria */}
                <TableBody>
                  {row.history.map((historyRow) => (

                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}
                      </TableCell>
                    </TableRow>

                  ))}
                </TableBody>

              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

{/* Nose que es esto pero venia con el codigo ¯\_(ツ)_/¯ */}
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


const rows = [
  createData('Cocktails', 5),
  createData('Pisco', 4),
  createData('Ron', 5),
  createData('Vodka', 7),
  createData('Cervezas', 10),
  createData('Pizzas', 4),
  createData('Tablas', 6),
  createData('Sandwich', 5),
];

export default function TableMenus() {
  return (
    <div className='dtable'>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Categorias</TableCell>
            <TableCell align="center">Numero de productos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.categoria} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
