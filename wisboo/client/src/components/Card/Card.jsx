import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPreguntas } from "../../actions/index";
import '../Card/Card.css'

function Card({ data }) {
  const dispatch = useDispatch();

  useEffect(() => { 
    if(data){
     return dispatch(getPreguntas(data.id));
    }
// eslint-disable-next-line
  }, [dispatch, data.id]);

  return (
    <div>
      {data ? (
        <div className="card">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
        </div>
      ) : (
        <h1>encuestas</h1>
          )
      }
    </div>
  );
}

export default Card;