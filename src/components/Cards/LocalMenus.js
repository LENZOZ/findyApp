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
const url="https://api.findy.cl/api/local/";
const url2="https://api.findy.cl/api/local/";

class App extends Component {
//Formulario de los datos
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    Local_id_local:id,
    id_local: '',
    rut: '',
    nombre: '',
    ubicacion: '',
    ruta_imagen: '',
    ruta_carta: ''
  }
}

/*Toda esta vaina es axios para el crud */
peticionGet=()=>{
axios.get(url).then(response=>{
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
  axios.put(url2+this.state.form.id_local, this.state.form).then(response=>{
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

seleccionarEmpresa=(local)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      Local_id_local:local.Local_id_local,
      id_local:local.id_local,
      rut:local.rut,
      nombre:local.nombre,
      ubicacion:local.ubicacion,
      ruta_imagen:local.ruta_imagen,
      ruta_carta:local.ruta_carta
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
   
        {/* */}
        {this.state.data.map(local=>{
            
          return(
            
            <div>
                {local.id_local==id?
            <div>
                <tr>
                <td>
                <h6 className='ttable' >Menu</h6>
                </td>
                <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(local); this.modalInsertar()}}><FontAwesomeIcon fontSize="xx-large" icon={faEdit}/></button>
                </td>
                </tr>
                <iframe className="carta"
               src={`${local.ruta_carta}#view=fitH`}
               height="100%"
               width="100%"
               title="carta"
             ></iframe>
            </div>
             :null
            }
            </div>
          )
        })}
{/**---------------- */}

{/**Esto son los modales (Ventanas flotante de insertar, eliminar y actualizar) */}
    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id_personal" id="id" readOnly onChange={this.handleChange} value={form?form.id_local: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Rut</label>
                    <input className="form-control" type="text" name="rut" id="rut" readOnly onChange={this.handleChange} value={form?form.rut: ''}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" readOnly onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="nombre">Token de Carta</label>
                    <input className="form-control" type="text" name="ruta_carta" id="ruta_carta" onChange={this.handleChange} value={form?form.ruta_carta: ''}/>
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