import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';

const authA = localStorage.getItem("admin");

let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
console.log(id);
const url="https://api.findy.cl/api/mesa/";
const url2="https://api.findy.cl/api/mesa/";

class App extends Component {
//Formulario de los datos
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    Local_id_local:id,
    id_Mesa: '',
    capacidad: '',
    nro_mesa: '',
    updatedAt: ''
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
  axios.put(url2+this.state.form.id_Mesa, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
   axios.delete(url2+this.state.form.id_Mesa).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
   

  }).catch(error=>{
    alert("No se puede eliminar esta mesa");
  })
}
/** hasta por aqui */


modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(mesa)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      Local_id_local:mesa.Local_id_local,
      id_Mesa: mesa.id_Mesa,
      capacidad: mesa.capacidad,
      nro_mesa: mesa.nro_mesa,
      updatedAt: mesa.updatedAt
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
      <h6 className='ttable' >Mesas</h6>
      </td>
      <td>
      <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><AiIcons.AiFillPlusCircle fontSize="xx-large" /></button>
      </td>
    </tr>
   
 <br />
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Capacidad</th>
          <th>nro_mesa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* */}
        {this.state.data.map(mesa=>{
          return(
            <tr>
          <td>{mesa.id_Mesa}</td>
          <td>{mesa.capacidad}</td>
          <td>{mesa.nro_mesa}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(mesa); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(mesa); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                    <input className="form-control" type="text" name="id_Mesa" id="id" readOnly onChange={this.handleChange} value={form?form.id_Mesa: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">capacidad</label>
                    <input className="form-control" type="text" name="capacidad" id="nombre" onChange={this.handleChange} value={form?form.capacidad: ''}/>
                    <br />
                    <label htmlFor="nombre">N°Mesa</label>
                    <input className="form-control" type="text" name="nro_mesa" id="pais" onChange={this.handleChange} value={form?form.nro_mesa: ''}/>
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
