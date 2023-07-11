import style from "./Form.module.css"
import React,{useState} from "react";
import validate from "./Validate";

export default function Form({login}){

    const [registro,setRegistro]= useState(false);

    function toggleButton() {
      registro?setRegistro(false):setRegistro(true)
    }


    const [inputs,setInput]= useState({
        correo:"",
        contraseña:"",
        confirmar:""
    });
    const [errors,setError]= useState({
        correo:"",
        contraseña:"",
        confirmar:""
    });

    function handleChange(evento){
        setInput({...inputs, 
          [evento.target.name]: evento.target.value,
        }
        )
        setError(
          validate({
             ...inputs,
             [evento.target.name]: evento.target.value,
          })
       );
      }

      function handleSubmit(evento){
        evento.preventDefault();
        login(inputs);            //manda la info del form a login
        const aux=Object.keys(errors);
        if(aux.length===0){
          setInput({
            correo:"",
            contraseña:"",
            confirmar:""
          })
          setError({
            correo:"",
            contraseña:"",
            confirmar:""
          })
          return;
        }
        return;
      }
      
   

     return (
        <div className={style.Form}>
            <form onSubmit={handleSubmit}>
              <label>Correo Electronico</label>
              <input 
              className={errors.name && 'warning'}
              name="correo"
              type="text"
              value={inputs.correo}
              placeholder="ingrese su correo"
              onChange={handleChange}>
              </input>
            <p className='danger'>{errors.correo}</p>
              <label>Contraseña</label>
              <input  
              className={errors.name && 'warning'}  
              name="contraseña"
              type="password"
              placeholder="ingrese su contraseña"
              value={inputs.contraseña}
              onChange={handleChange}>
              </input>
            {registro?<input  className={errors.name && 'warning'} 
              id="confirmPassword" 
              name="confirmar"
              type="password"
              placeholder="Confirme su contraseña"
              value={inputs.confirmar}
              onChange={handleChange}></input>:null}
             <p className='danger'>{errors.contraseña}</p>
            <button id="submitButton">{registro?"Registrar":"Ingresar"}</button>
            <button type="button" onClick={toggleButton}>{registro?"¿Ya tienes cuenta? Iniciar sesion":"¿Nuevo usuario? Registrarse"}</button>
            </form>
        </div>
     );



}