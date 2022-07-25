import { useEffect, useState } from "react";
import { Carousel, Row, Col, Tab } from 'react-bootstrap';
import "./PromMenu.css";


export function LocalMenus() {
    const authA = localStorage.getItem("admin");
    const id=  1//JSON.parse(authA).Local_id_local;

    const [local, setLocal] = useState([]);

    useEffect(() => {
        getLocal();
    }, []);

    const getLocal = async () => {
        let result = await fetch("https://api.findy.cl/api/local/"+id);
        result = await result.json();
        setLocal(result);
    };

    return(  
        <div className="PromMenu">  
        <Tab.Container id="list-group-tabs-example">
        <Row xs={2} md={2} className="g-4">
            <Col align="center">
            <h2 className="tMenu" style={{padding:20}}>Menu activo</h2>
            </Col>
            <Col align="center">
            <button className="tMenu"style={{padding:16}}>Actualizar menu</button>
            </Col>
        </Row>
        <Row>
            <Col>
            <iframe className="carta"
               src={`${local.ruta_carta}#view=fitH`}
               height="100%"
               width="100%"
               title="carta"
             ></iframe>
            </Col>
        </Row>
        </Tab.Container>
        </div>  
    )

}