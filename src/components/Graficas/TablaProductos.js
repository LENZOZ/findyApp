import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const authA = localStorage.getItem("admin");

const id=  1;//JSON.parse(authA).Local_id_local;
const url="https://api.findy.cl/api/producto/";
const url2="https://api.findy.cl/api/producto/";

class App extends Component {
//Formulario de los datos
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    Local_id_local:id,
    id_producto: '',
    nombre: '',
    tipo_producto: '',
    stock: '',
    precio: '',
    descripcion: ''
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

seleccionarEmpresa=(producto)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      Local_id_local:producto.Local_id_local,
      id_producto: producto.id_producto,
      nombre: producto.nombre,
      tipo_producto: producto.tipo_producto,
      stock: producto.stock,
      precio: producto.precio,
      descripcion: producto.descripcion
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
    <br /><br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Mesa</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo de producto</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* */}
        {this.state.data.map(producto=>{
          return(
            <tr>
          <td>{producto.id_producto}</td>
          <td>{producto.nombre}</td>
          <td>{producto.tipo_producto}</td>
          <td>{producto.descripcion}</td>
          <td>{producto.stock}</td>
          <td>{producto.precio}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(producto); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(producto); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                    <input className="form-control" type="text" name="id_producto" id="id" readOnly onChange={this.handleChange} value={form?form.id_producto: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="nombre">Tipo de producto</label>
                    <input className="form-control" type="text" name="tipo_producto" id="tipo_producto" onChange={this.handleChange} value={form?form.tipo_producto: ''}/>
                    <br />
                    <label htmlFor="nombre">Stock</label>
                    <input className="form-control" type="text" name="stock" id="stock" onChange={this.handleChange} value={form?form.stock: ''}/>
                    <br />
                    <label htmlFor="nombre">Precio</label>
                    <input className="form-control" type="text" name="precio" id="precio" onChange={this.handleChange} value={form?form.precio: ''}/>
                    <br />
                    <label htmlFor="nombre">Descripcion</label>
                    <input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form?form.descripcion: ''}/>
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
