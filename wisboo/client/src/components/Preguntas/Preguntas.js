import React from "react";
import '../Preguntas/Preguntas.css'
import { useSelector, useDispatch } from "react-redux";


function Preguntas({ data }) {
  const id = useSelector((state) => state.EncuestaById.id)

  return (
    <>
    <div>
      {data.length>1?(
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
                </>
            ):("")
          ))
      ):("")}
    </div>
    <div>
        {data.length>1?(
            data.map((e)=>(
                e.question_type==="texto" && e.encuestumId===id?(
                    <>
                    <h1>{e.text}</h1>
                    <p>Escriba aqui su respuesta</p>
                    <textarea className="inputText"></textarea>
                    </>
                ):("")
            ))
        ):("")}
    </div>
    <div>
        {data.length>1?(
            data.map((e)=>(
                e.question_type==="seleccion simple" && e.encuestumId===id?(
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
    </>
  );
}

export default Preguntas;