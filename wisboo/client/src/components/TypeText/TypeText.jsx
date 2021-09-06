import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  createPregunta } from "../../actions/index";
import "./TypeText.css";
function TypeText (){
    const dispatch = useDispatch();
    const encuestas = useSelector((store) => store.encuestas);

    const [state, setState] = useState({
        question_type: "texto",
        text: "",
        options:[]
      });

    const changeInput = (e) => {
        e.preventDefault()
           setState({
               ...state,
               [e.target.name]:e.target.value
           })
       console.log(state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id:encuestas.id,
            question_type: state.question_type,
            text: state.text,
            options: state.options
        };
            dispatch(createPregunta(obj));
            e.target.reset();
            // setState({
            //   name: "",
            //   description: "",
            // });
    };

    return(
    <form onChange={changeInput} onSubmit={handleSubmit}>
        <p>Pregunta</p>
        <textarea 
            type="text"
            name="text"/>
        <br />
        <button className="btn1" type="submit">Crear Pregunta</button>
    </form> 
    )

}
export default TypeText;