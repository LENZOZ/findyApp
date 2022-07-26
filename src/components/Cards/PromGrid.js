import { Card, Col, Row } from 'react-bootstrap';
import "./PromGrid.css";
import "./PromCar.css"
import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import * as AiIcons from 'react-icons/ai';

const authA = localStorage.getItem("admin");
let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
const url="https://api.findy.cl/api/promocion/all/";
const url2="https://api.findy.cl/api/promocion/";

class PromGrid extends Component {
    //Formulario de los datos
    state={
      data:[],
      form:{
        Local_id_local:id,
        id_Promocion: '',
        nombre:'',
        descripcion: '',
        precio: '',
        fecha_inicio: '',
        fecha_termino:'',
        estado: '',
        ruta_imagen: ''
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
         axios.put(url2+this.state.form.id, this.state.form).then(response=>{
           this.modalInsertar();
           this.peticionGet();
         })
       }
       
       peticionDelete=()=>{
          axios.delete(url2+this.state.form.id).then(response=>{
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
    
    seleccionarEmpresa=(promo)=>{
        this.setState({
        tipoModal: 'actualizar',
        form: {
            Local_id_local:promo.Local_id_local,
            id: promo.id_Promocion,
            nombre: promo.nombre,
            descripcion: promo.descripcion,
            precio: promo.precio,
            fecha_inicio: promo.fecha_inicio,
            fecha_termino: promo.fecha_termino,
            estado: promo.estado,
            ruta_imagen: promo.ruta_imagen
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
        <div className="PromCar">
            <button className="btn btn-success" style={{margin:10}} onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><AiIcons.AiFillPlusCircle fontSize="xx-large" /></button>
                <Row xs={1} md={2} lg={4} className="g-4">
                {this.state.data.map(promo=>{
                    return(
                        <Col>
                        <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(promo); this.modalInsertar()}}><FontAwesomeIcon fontSize="xx-large" icon={faEdit}/></button>
                        <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(promo); this.setState({modalEliminar: true})}}><FontAwesomeIcon fontSize="xx-large" icon={faTrashAlt}/></button>
                        {promo.estado==1?
                        <Card>
                            <Card.Img src={promo.ruta_imagen} />
                            <Card.Body>
                            <Card.Title>{promo.descripcion}</Card.Title>
                                <Card.Text>
                                En curso <br />
                                {promo.fecha_inicio} - {promo.fecha_termino}
                            </Card.Text>
                            </Card.Body>
                        </Card>:<Card>
                            <Card.Img className='PromDisabled' src={promo.ruta_imagen} />
                            <Card.Body>
                            <Card.Title>{promo.descripcion}</Card.Title>
                                <Card.Text>
                                Finalizada <br />
                                {promo.fecha_inicio} - {promo.fecha_termino}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        }
                        </Col>
                    )
                    })}
                </Row>  
    {/**---------------- */}

    {/**Esto son los modales (Ventanas flotante de insertar, eliminar y actualizar) */}
    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form?form.descripcion: ''}/>
                    <br />
                    <label htmlFor="descripcion">Fecha Inicio</label>
                    <input className="form-control" type="date" name="fecha_inicio" id="fecha_inicio" onChange={this.handleChange} value={form?form.fecha_inicio: ''}/>
                    <br />
                    <label htmlFor="descripcion">Fecha Termino</label>
                    <input className="form-control" type="date" name="fecha_termino" id="fecha_termino" onChange={this.handleChange} value={form?form.fecha_termino: ''}/>
                    <br />
                    <label htmlFor="descripcion">Estado</label>
                    {/*<input className="form-control" type="number" name="estado" id="estado" onChange={this.handleChange} value={form?form.estado: ''}/>*/}
                    
                    <select className="form-control" name="estado" id="estado" onChange={this.handleChange} required value={form?form.estado: ''}>
                      <option value="" disabled selected>Elija una opcion</option>
                      <option value="0">Finalizada</option>
                      <option value="1">En Curso</option>
                     </select>
                    
                    <br />
                    <label htmlFor="descripcion">Token de Imagen</label>
                    <input className="form-control" type="text" name="ruta_imagen" id="ruta_imagen" onChange={this.handleChange} value={form?form.ruta_imagen: ''}/>
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
    export default PromGrid;