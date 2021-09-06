const initialState = {
    EncuestaById:[],
    preguntas: [],
    encuestas:[],
    loading: false,
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        
        case "CREATE_ENCUESTA":
            return {
                ...state,
                encuestas : action.payload,
            }

        case "GET_ENCUESTA_BY_ID": 
            return {
                ...state,
                EncuestaById: action.payload,
            }

        case "GET_PREGUNTAS":
            return {
                ...state,
                preguntas:  action.payload
            }

        case "CREATE_PREGUNTA":
            return {
                ...state,
                preguntas: [...state.preguntas, action.payload]
            }
        default:
            return state
    }
}