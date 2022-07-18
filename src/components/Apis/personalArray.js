import React, { useState } from "react";

function PersonalArray(){

    const auth = localStorage.getItem("usuario");
    let localId = JSON.parse(auth).Local_id_local;
    
    
    
    const [personal, setPersonal] = useState([]);
    
    const getPersonal = async () => {
        let result = await fetch("http://localhost:3001/api/personal/"+localId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((result) => result.json());;
        setPersonal(result);
        };
      getPersonal();
    
      console.log(personal)
      return personal

}

export default PersonalArray