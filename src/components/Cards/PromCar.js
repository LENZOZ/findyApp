
import { Carousel } from 'react-bootstrap';
import "./PromCar.css"
import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



const authA = localStorage.getItem("admin");

let id=  0;//JSON.parse(authA).Local_id_local;
if (authA){
  id = JSON.parse(authA).Local_id_local;
}
const url="https://api.findy.cl/api/promocion/";

class PromCar extends Component {
    //Formulario de los datos
    state={
      data:[],
      form:{
        Local_id_local:id,
        id_Promocion: '',
        descripcion: '',
        ruta_imagen: '',
        fecha_inicio: '',
        fecha_termino:''
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
                <Carousel className='Pcar'>
                {this.state.data.map(promo=>{
                    return(
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={promo.ruta_imagen}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 className='h3car'>{promo.descripcion}</h3>
                            <p className='h3car'>{promo.fecha_inicio}</p>
                            </Carousel.Caption>     
                        </Carousel.Item>    
                    )
                    })}
                </Carousel>

    {/*
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>descripcion</th>
              <th>ruta</th>
              <th>fecha_inicio</th>
              <th>fecha_termino</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(promo=>{
              return(
                <tr>
              <td>{promo.id_Promocion}</td>
              <td>{promo.descripcion}</td>
              <td>{promo.ruta_imagen}</td>
              <td>{promo.fecha_inicio}</td>
              <td>{promo.fecha_termino}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        */}
    
    {/**---------------- */}
      </div>
      
      );
    }
    }
    export default PromCar;
    

