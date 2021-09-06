import React from "react";
import '../Preguntas/Preguntas.css'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { getPreguntas } from "../../actions";


function Preguntas({ data }) {
  const id = useSelector((state) => state.EncuestaById.id)
  const dispatch = useDispatch()

const eliminar = (id) =>{
    axios.delete(`http://localhost:3001/forms/preguntas/delete/${id}`)
    .then(response => console.log(response.data)) 
    .catch(error  => console.log(error))
    alert('Eliminar Pregunta?')
   return dispatch(getPreguntas())
}

  return (
    <>
    <div>
      {data.length>0?(
          data.map((e)=>(
            e.question_type ==="seleccion multiple" && e.encuestumId===id?(
                <>
                    <h1>{e.text}</h1>
                    <div className="divOp">
                        <ul  >
                        {e.options.map((dat) => (
                            <li >
                            <input 
                                className="input" 
                                type="checkbox"
                                value={dat}></input>
                                <label name={dat}>{dat}</label>
                            </li>
                        ))}
                        </ul>
                    </div>  
                    <button className="eliminarPregunta" onClick={()=>eliminar(e.id)} >Eliminar Pregunta</button> 
                </>
            ):("")
          ))
      ):("")}
    </div>
    <div>
        {data.length>0?(
            data.map((e)=>(
                e.question_type==="texto" && e.encuestumId===id?(
                    <>
                    <h1>{e.text}</h1>
                    <p>Escriba aqui su respuesta</p>
                    <textarea className="inputText"></textarea>
                    <br/>
                    <button className="eliminarPregunta" onClick={()=>eliminar(e.id)} >Eliminar Pregunta</button> 
                    </>
                ):("")
            ))
        ):("")}
    </div>
    <div>
        {data.length>0?(
            data.map((e)=>(
                e.question_type==="seleccion simple" && e.encuestumId===id?(
                    <>
                        <h1>{e.text}</h1>
                        <div className="divOp">
                            <ul  >
                                {e.options.map((dat) => (
                                <li >
                                    <input 
                                    className="input" 
                                    type="radio"
                                    value={dat}></input>
                                    <label name={dat}>{dat}</label>
                                </li>
                                ))}
                            </ul>
                        </div>  
                        <button className="eliminarPregunta" onClick={()=>eliminar(e.id)} >Eliminar Pregunta</button> 
                    </>
                ):("")
            ))
        ):("")}
    </div>
    </>
  );
}

export default Preguntas;