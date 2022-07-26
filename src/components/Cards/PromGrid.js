import { Card, Col, Row } from 'react-bootstrap';
import "./PromGrid.css";
import "./PromCar.css"
import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



const authA = localStorage.getItem("admin");
let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
const url="https://api.findy.cl/api/promocion/all/";

class PromGrid extends Component {
    //Formulario de los datos
    state={
      data:[],
      form:{
        Local_id_local:id,
        id_Promocion: '',
        descripcion: '',
        ruta_imagen: '',
        fecha_inicio: '',
        fecha_termino:'',
        estado: ''
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
                <Row xs={1} md={2} lg={4} className="g-4">
                {this.state.data.map(promo=>{
                    return(
                        <Col>
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
      </div>
      
      );
    }
    }
    export default PromGrid;