import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Moment from 'moment';



export function MisReservas(){
    const auth = localStorage.getItem("usuario");
    let id = JSON.parse(auth).id_usuario;
    const [reservas, setReservas] = useState([]);
    const [locales, setLocales] = useState([]);
    const [mesas, setMesas] = useState([]);
    let dir;

    useEffect(() => {
        getReservas();
        getLocal();
        getMesas();
      }, []);


      const getMesas = async () => {
   
        let result = await fetch("http://api.findy.cl/api/mesa");
        result = await result.json();
        setMesas(result);
        console.table(mesas);
      };

    const getReservas = async () => {
   
        let result = await fetch("https://api.findy.cl/api/reserva/"+id);
        result = await result.json();
        setReservas(result);
      };
    
    const getLocal = async () =>{
      let result = await fetch("https://api.findy.cl/api/local/");
      result = await result.json();
      setLocales(result);
      console.warn(locales)
    }

    function localR (iden){
      console.log(iden)
      dir = iden;
      
      var nombre = locales.map(function(local){
        if (local.id_local === iden){
          return local.nombre
        }
    });

      return nombre;
    }
    return (

        <>
        <Container>
        <br></br>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Local</th>
      <th>Mesa</th>
      <th>Fecha & Hora</th> 
    </tr>
  </thead>
  <tbody>
  {reservas.map((reserva) => (
    
    <tr>
      <td>{reserva.id_Reserva}</td>
      <td>{localR(reserva.Local_id_local)}</td>
      <td>{reserva.Mesa_id_mesa}</td>
      <td>{Moment(reserva.fecha_reserva).format('DD-MM-YYYY hh:mm')}</td> 
    </tr>
  ))}
  </tbody>
</Table>

</Container>
        </>
    );
}