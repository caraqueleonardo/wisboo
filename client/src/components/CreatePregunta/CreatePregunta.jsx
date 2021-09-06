import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TypeText from '../TypeText/TypeText'
import MultipleType from '../MultipleType/MultipleType'
import SimpleSelection from "../SimpleSelection/SimpleSelection";
import "./CreatePregunta.css";

function CreatePregunta() {

    const [state, setState] = useState({
        question_type: "",
        text: "",
        options:[]
      });

     const changeInput = (e) =>{
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        console.log(state);
     }

  return (
    <>
      <label>Tipo de Pregunta</label>
      <select className="select" name="question_type" onChange={changeInput}>
          <option defaultValue="texto">elegir una opcion</option>
          <option value="seleccion multiple">seleccion multiple</option>
          <option value="seleccion simple">seleccion simple</option>
          <option value="texto">texto</option>
      </select>
      {state.question_type === "texto"?(
            <TypeText/>
      ): state.question_type === "seleccion multiple"?(
            <MultipleType/>
      ): state.question_type === "seleccion simple"?(
            <SimpleSelection/>
      ):("")}
      
    </>
  );
}

export default CreatePregunta;