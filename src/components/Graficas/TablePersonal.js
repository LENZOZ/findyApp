import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';
import "./TablesV2.css";

const authA = localStorage.getItem("admin");

let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
const url="https://api.findy.cl/api/personal/";
const url2="https://api.findy.cl/api/personal/";

class App extends Component {
//Formulario de los datos
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    Local_id_local:id,
    id_personal: '',
    rut: '',
    nombre: '',
    cargo: '',
    correo: '',
    fecha_nacimiento: '',
    telefono: ''
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
 await axios.post(url2+id ,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url2+this.state.form.id_personal, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
   axios.delete(url2+this.state.form.id_personal).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
   

  }).catch(error=>{
    alert("No se puede eliminar el trabajador");
  })
}
/** hasta por aqui */


modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(personal)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      Local_id_local:personal.Local_id_local,
      id_personal: personal.id_personal,
      rut: personal.rut,
      nombre: personal.nombre,
      cargo: personal.cargo,
      correo: personal.correo,
      fecha_nacimiento: personal.fecha_nacimiento,
      telefono: personal.telefono
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
    <tr>
      <td>
      <h6 className='ttable' >Personal</h6>
      </td>
      <td>
      <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><AiIcons.AiFillPlusCircle fontSize="xx-large" /></button>
      </td>
    </tr>
   
   
   <table className="tableV2 ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Rut</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Correo</th>
          <th>Fecha de nacimiento</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* */}
        {this.state.data.map(personal=>{
          return(
            <tr align="center">
          <td>{personal.id_personal}</td>
          <td>{personal.rut}</td>
          <td>{personal.nombre}</td>
          <td>{personal.cargo}</td>
          <td>{personal.correo}</td>
          <td>{personal.fecha_nacimiento}</td>
          <td>{personal.telefono}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(personal); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(personal); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                    <input className="form-control" type="text" name="id_personal" id="id" readOnly onChange={this.handleChange} value={form?form.id_personal: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Rut</label>
                    <input className="form-control" type="text" name="rut" id="rut" onChange={this.handleChange} value={form?form.rut: ''}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="nombre">Cargo</label>
                    <input className="form-control" type="text" name="cargo" id="cargo" onChange={this.handleChange} value={form?form.cargo: ''}/>
                    <br />
                    <label htmlFor="nombre">Correo</label>
                    <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form?form.correo: ''}/>
                    <br />
                    <label htmlFor="nombre">Fecha de Nacimiento</label>
                    <input className="form-control" type="date" name="fecha_nacimiento" id="fecha_nacimiento" onChange={this.handleChange} value={form?form.fecha_nacimiento: ''}/>
                    <br />
                    <label htmlFor="nombre">Telefono</label>
                    <input className="form-control" type="text" name="telefono" id="telefono" onChange={this.handleChange} value={form?form.telefono: ''}/>
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
