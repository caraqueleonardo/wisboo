import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  createPregunta } from "../../actions/index";
import "./SimpleSelection.css";
function SimpleSelection (){
    const dispatch = useDispatch();
    const encuestas = useSelector((store) => store.encuestas);

    const [state, setState] = useState({
        question_type: "seleccion simple",
        text: "",
        options:[]
      });

      var array = []
      const llenar = (e) => {
        var a = e.target.value
        array.push(a)
        console.log(array);
        // setState({
        //     ...state,
        //     options:array
        // })
    }
    const changeInput = (e) => {
        if (e.target.name === "options") {
            const arr = state[e.target.name];
            setState({
              ...state,
              [e.target.name]: arr.concat(array),
            });
        } else {
            setState({
                ...state,
                [e.target.name]:e.target.value
            })
        }
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
    };
    
    return(
        <form onChange={changeInput} onSubmit={handleSubmit}>
            <p>Pregunta</p>
            <textarea 
                type="text"
                name="text"/>
            <p >opcion1</p>
            <input type="text" 
                   name="options"
                   onBlur={llenar} />
            <p >opcion2</p>
            <input type="text" 
                   name="options"
                   onBlur={llenar}
                />
            <p >opcion3</p>
            <input type="text" 
                   name="options"
                   onBlur={llenar}
                   />
            <p >opcion4</p>
            <input type="text" 
                   name="options"
                   onBlur={llenar}
                   />
            <br />
            <button className="btn1" type="submit">Crear Pregunta</button>
        </form>
    )
}
export default SimpleSelection;