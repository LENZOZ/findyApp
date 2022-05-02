import React from "react";

class Componente extends React.Component{
    //render Muestra vista del componente
    render(){
        return(
            //se recomienda crear un <div className="mi-componente">
            <React.Fragment> 
                <h1>Nuevo componente para Findy</h1>
            </React.Fragment>
            
        );
    }
}

export default Componente;