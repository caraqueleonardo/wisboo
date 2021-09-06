
export function getEncuesta(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/forms/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_ENCUESTA_BY_ID",
          payload: json
        });
      });
}

export function getPreguntas(id) {
  return (dispatch) =>
    fetch(`http://localhost:3001/forms/preguntas/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "GET_PREGUNTAS",
          payload: json
        });
      });
}

export function createEncuesta(obj) {
  return (dispatch) =>
    fetch("http://localhost:3001/forms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_ENCUESTA",
          payload: json,
        });
      });
}

export function createPregunta(obj) {
  let id = obj.id
  return (dispatch) =>
    fetch(`http://localhost:3001/forms/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CREATE_PREGUNTA",
          payload: json,
        });
      });
}

export const resetAll = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
};
