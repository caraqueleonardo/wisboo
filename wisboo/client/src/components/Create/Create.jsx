import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  createEncuesta } from "../../actions/index";
import CreatePregunta from '../CreatePregunta/CreatePregunta'
import "./Create.css";

function Create() {
  const dispatch = useDispatch();
  const encuestas = useSelector((store) => store.encuestas);
  const pregunta = useSelector((store) => store.preguntas)

  const [state, setState] = useState({
    name: "",
    description: "",
  });

  const ChangeInput = (e) => {
      e.preventDefault()
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: state.name,
      description: state.description,
    };
        if (!obj.name) {
          alert('debe ingresar un titulo')
          return
        }
        if (!obj.description) {
          alert('debe agregar una descripcion')
          return
        }
        dispatch(createEncuesta(obj));
        //  e.target.reset();

         setState({
           name: "",
           description: "",
         });
  };

  const crear = ()=>{
      window.location.reload()
  }

  return (
    <div className="Form">
      <header>
        <h1 id="title">Creacion de Encuesta</h1>
      </header>
      <form  className="form" 
        onChange={ChangeInput}
        >
        <div className="divForm">
          <div>
            <p className="text-label">Titulo</p>
            <input
              className="inp"
              type="text" 
              name="name"
              value={state.title}
            ></input>
            <br />

          </div>
          <div>
            <p className="text-label">Descripcion</p>
            <input className="inp" 
              type="text"
              name="description"
              value={state.resume}
            ></input>
          </div>
        </div>
        <button className="btn" onClick={handleSubmit}>Agregar Titulo y Descripion</button>
      </form>
      <CreatePregunta/>
      <div>
        { encuestas? (
            <div className="vista">
                <h1>{encuestas.name}</h1>
                <h3>{encuestas.description}</h3>
            </div>
        ):("")
        }
      </div>
      <div>
      {pregunta.length>0?(
          pregunta.map((e)=>(
            e.question_type ==="seleccion multiple" ?(
                <>
                    <h1>{e.text}</h1>
                    <div className="divOp">
                      <ul>
                        {e.options.map((dat) => (
                            <li >
                                <input
                                    disabled 
                                    className="input" 
                                    type="checkbox"
                                    value={dat}></input>
                                <label name={dat}>{dat}</label>
                            </li>
                        ))}
                      </ul>
                    </div>  
                </>
            ):("")
          ))
      ):("")}
    </div>
    <div>
        {pregunta.length>0?(
            pregunta.map((e)=>(
                e.question_type==="texto" ?(
                    <>
                    <h1>{e.text}</h1>
                    <p>Escriba aqui su respuesta</p>
                    <textarea disabled className="inputText"></textarea>
                    </>
                ):("")
            ))
        ):("")}
    </div>
    <div>
        {pregunta.length>0?(
            pregunta.map((e)=>(
                e.question_type==="seleccion simple" ?(
                    <>
                        <h1>{e.text}</h1>
                        <div className="divGen">
                            <ul className="ilGen" >
                                {e.options.map((dat) => (
                                <li className="liGen">
                                    <input 
                                    className="input" 
                                    type="radio"
                                    value={dat}></input>
                                    <label name={dat}>{dat}</label>
                                </li>
                                ))}
                            </ul>
                        </div>  
                    </>
                ):("")
            ))
        ):("")}
    </div>
        <button onClick={crear}>Crear Encuesta</button>
    </div>
  );
}

export default Create;