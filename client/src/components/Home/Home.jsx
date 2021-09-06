import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEncuesta, resetAll } from "../../actions/index";
import Preguntas from "../Preguntas/Preguntas";
import Card from "../Card/Card";
import '../Home/Home.css'

function Home() {

  const encuesta = useSelector((state) => state.EncuestaById)
  const preguntas = useSelector((state) => state.preguntas)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAll());
// eslint-disable-next-line
  }, []);
  
  const [datos, setDatos] = React.useState({
    title:'',
    a: false,
  })
  
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value,
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      a:true
    })
    if(datos.title){
      dispatch(getEncuesta(datos.title));
    }
  }

  //vaciar input
  function vaciar(e) {
    e.target.value='';
  }
  return (
    <div className="home">
          <form onSubmit={handleSubmit}>
            <input 
              onFocus={vaciar} 
              onBlur={vaciar} 
              name="title" 
              onChange={handleInputChange} 
              placeholder="Buscar Encuesta...">
            </input>
              <button type="submit" >Search</button>
          </form>
          <>{encuesta?(
            <>
              <Card data={encuesta}/>  
              <Preguntas data={preguntas}/>
            </>
          ):("")}
          </>
    </div>
  );
}


export default Home;