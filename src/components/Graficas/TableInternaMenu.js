import React, {useState, useRef} from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {
  //Constante de productos
  const dataProducto = [
    //{id: 1, nombre: "Mojito", categoria: "Ron", precio: 5000},
    //{id: 2, nombre: "Casa Blanca", categoria: "Vodka", precio: 5500}
  ];


  //Modal °° Ventana flotante
  const [data, setData] = useState(dataProducto);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);


  //Constante variables
const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    nombre: '',
    categoria: '',
    precio: ''
});

  //Llama a el modal editar y eliminar
  const seleccionarProducto=(elemento, caso)=>{
    setProductoSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
      }

  const handleChange=e=>{
    const {name, value}=e.target;
    setProductoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }


  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(producto=>{
      if(producto.id===productoSeleccionado.id){
        producto.nombre=productoSeleccionado.nombre;
        producto.categoria=productoSeleccionado.categoria;
        producto.precio=productoSeleccionado.precio;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(producto=>producto.id!==productoSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=productoSeleccionado;
    valorInsertar.id=data.length+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="tableInterna">
    <p>Articulos</p>
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.categoria}</td>
              <td>{elemento.precio}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarProducto(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarProducto(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={productoSeleccionado && productoSeleccionado.id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={productoSeleccionado ? productoSeleccionado.nombre: ''}
              onChange={handleChange}
            />
            <br />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="categoria"
              value={productoSeleccionado ? productoSeleccionado.categoria: ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="number"
              name="precio"
              value={productoSeleccionado ? productoSeleccionado.precio: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el país {productoSeleccionado && productoSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data.length+1}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={productoSeleccionado ? productoSeleccionado.nombre: ''}
              onChange={handleChange}
            />
            <br />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="categoria"
              value={productoSeleccionado ? productoSeleccionado.categoria: ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="number"
              name="precio"
              value={productoSeleccionado ? productoSeleccionado.precio: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;