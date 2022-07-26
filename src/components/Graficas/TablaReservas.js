import './Tables.css';

import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import moment from 'moment';
import "./TablesV2.css";

const authA = localStorage.getItem("admin");

let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
const url="https://api.findy.cl/api/reserva/total/";
const url2="https://api.findy.cl/api/mesa/";
const url3="https://api.findy.cl/api/reserva/";

class App extends Component {
//Formulario de los datos
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    Local_id_local:id,
    id_Reserva: '',
    Usuario_id_usuario: '',
    Mesa_id_mesa: '',
    estado: '',
    fecha_reserva: ''
  }
}

/*Toda esta vaina es axios para el crud */
peticionGet=()=>{
axios.get(url+id).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
 await axios.post(url2 ,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url3+this.state.form.id_Reserva, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
   axios.delete(url3+this.state.form.id_Reserva).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
   

  }).catch(error=>{
    alert("No se puede eliminar esta reserva");
  })
}
/** hasta por aqui */


modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(reserva)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      Local_id_local:reserva.Local_id_local,
      id_Reserva: reserva.id_Reserva,
      id: reserva.Usuario_id_usuario,
      Usuario_id_usuario: reserva.Usuario_id_usuario,
      mesaId: reserva.Mesa_id_mesa,
      mesa: reserva.Mesa_id_mesa,
      estado: reserva.estado,
      fecha: reserva.fecha_reserva,
      datetime: reserva.fecha_reserva
    }
  })
}


handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  
//Esto es toda la tabla
  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br />
    {/*<button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Reserva</button>*/}
    <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Reserva</button>
    <table className="tableV2">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Mesa</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* */}
        {this.state.data.map(reserva=>{
          return(
            <tr align="center">
              <td>{reserva.id_Reserva}</td>
              <td>{reserva.Usuario_id_usuario}</td>
              <td>{reserva.Mesa_id_mesa}</td>
              <td>{reserva.estado}</td>
              <td>{moment(reserva.fecha_reserva,"YYYY-MM-DD HH:mm:ss").format('DD-MM-YYYY')}</td>
              <td>
                    <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(reserva); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                    {"   "}
                    <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(reserva); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </td>
          </tr>
          )
        })}
      </tbody>
    </table>
{/**---------------- */}

{/**Esto son los modales (Ventanas flotante de insertar, eliminar y actualizar) */}
    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="number" name="id_Reserva" id="id" readOnly onChange={this.handleChange} value={form?form.id_Reserva: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Usuario</label>
                    {this.state.tipoModal=='insertar'?
                    <input className="form-control" type="number" name="id" id="id" onChange={this.handleChange} value={form?form.id: ''}/>:
                    <input className="form-control" type="number" name="Usuario_id_usuario" id="Usuario_id_usuario"  onChange={this.handleChange} value={form?form.Usuario_id_usuario: ''}/>
                    }
                    <br />
                    <label htmlFor="nombre">Mesa</label>
                    {this.state.tipoModal=='insertar'?
                    <input className="form-control" type="number" name="mesaId" id="mesaId" onChange={this.handleChange} value={form?form.mesaId: ''}/>:
                    <input className="form-control" type="number" name="mesa" id="Mesa_id_mesa" onChange={this.handleChange} value={form?form.mesa: ''}/>
                    }
                    <br />
                    
                    <label htmlFor="nombre">Estado</label>
                    {/**
                    <input className="form-control" type="number" name="estado" id="Mesa_id_mesa" onChange={this.handleChange} value={form?form.estado: ''}/>
                    <br />
                     */}
                     <select className="form-control" name="estado" id="estado" onChange={this.handleChange} value={form?form.estado: ''}>
                      <option disabled defaultValue>Elija una opcion</option>
                      <option value="1">Solicitado</option>
                      <option value="2">Aprovado</option>
                      <option value="3">Completado</option>
                     </select>
                     <br />
                    <label htmlFor="nombre">Fecha</label>
                    {this.state.tipoModal=='insertar'?
                    <input className="form-control" type="date" name="fecha" id="fecha" onChange={this.handleChange} value={form?moment(form.fecha, "YYYY-MM-DD HH:mm:ss").format('YYYY-MM-DD'): ''}/>:
                    <input className="form-control" type="date" name="datetime" id="stock" onChange={this.handleChange} value={form?moment(form.datetime, "YYYY-MM-DD HH:mm:ss").format('YYYY-MM-DD'): ''}/>
                    }
                    <br />
                    
                  </div>
                </ModalBody>
                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>}
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar la mesa {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
{/**---------------- */}
  </div>
  
  );
}
}
export default App;
