const reducer = (state,action) => {
    
    switch(action.type) {
        case 'SET_FAVORITE':
            let identificador = Object.values(action.payload)  //el id es identificador[0] por que tiene posicion 0
            if(state.myList.length > 0 && state.myList.find(element => element.id == identificador[0]))
               {return state}
                 else{
                      return{
                          ...state,
                          myList:[...state.myList, action.payload],
                        }                                   //a myList le estamos pasando una destructuracion de state.mylist estos son los elementos que ya posee state.myList los estamos volviendo a agregar en sate.mylist para que al ocurrir una nuva accion se mantenga los elementos que ya estaban en myList
                    }
        case 'DELETE_FAVORITE':
            return{
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)    //con filter retornamos los items que tenga un id distinto de action.payload, asi eliminamos elementos de myList.
            }
        
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'GET_VIDEO_SOURCE':
            return{
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) ||                       //usamos el metodo find de js para hacer una busqueda dentro de los arreglos que tenemos con la informacion de los items, buscaremos en los ids la informacion del id que coincida con el payload. 
                state.originals.find(item =>  item.id === Number(action.payload)) ||
                state.search.find(item => item.id === Number(action.payload) ) ||
                state.myList.find(item => item.id === Number(action.payload) ) ||                               //action.payload llega como un string e item.id como un numero, por lo que con Number convertimos action.payload en tipo Number.
                [],                                                                                            //si noconseguimos un id en trends, se buscara en originals, y si tampoco conseguimos ahi, regresaremos un array vacio.
            }
        case 'SEARCH_VIDEO':
            return{
                ...state,
                search: action.payload,      
            }
        case 'RESULT_SEARCH':
            return{
                ...state,
                search: state.trends.find(item => item.title === (action.payload)) ||
                state.originals.find(item => item.title === (action.payload)) ||
                [],            
            }
        case 'ADD_VIDEOS_STATE_TRENDS':

            return{
                ...state,
                trends : action.payload,

            }
        case 'ADD_VIDEOS_STATE_ORIGINALS':
            return{
                ...state,
                originals: action.payload,
            }    
        case 'NEXT_PAGE_TRENDS':
            return{
                ...state,
                numberPageTrends:  action.payload,
            }
         case 'NEXT_PAGE_ORIGINALS':
            return{
                ...state,
                numberPageOriginals: action.payload,
            }
         case 'ADD_KEY_VIDEO':
             return{
                 ...state,
                 videoKey: action.payload
             }
         case 'GET_MOVIE_INFO':
             return{
                 ...state,
                 movieInfo: action.payload
             }
         case 'CHANGE_LENGUAGE':
             return{
                 ...state,
                 lenguageUS : action.payload
             }                
        
        default:
            return state;
        
                                                                                    
    };

};


export default reducer;




/* Con este case conseguimos agregar un elemento a myList solo si este elemento ya no ha sido agregado antes
    logramos esto a traves de asignar en una variable "identificador" los valores del objeto payload a  traves de Object.values
    teniedo los valores sabemos que el id se ecnuentra en la posicion 0.

    luego creamos un condicional if qe evaluar si mylist posee elementos y si el elemento que posee contiene un id que sea igual a la posicion 0 de la variable
    identificador que es el id de payload. si estas dos condiciones se cumplen, retornamos el estado original, asi no añadimos el mismo elemento.

    si no se cumplen entonces se añadira a myList el elemento que deseemos añadir.
*/

// case 'SET_FAVORITE':
//     let identificador = Object.values(action.payload)  //el id es identificador[0] por que tiene posicion 0
//     if(state.myList.length > 0 && state.myList.find(element => element.id == identificador[0]))
//         {return state}else{
//     return{
//         ...state,
//         myList:[...state.myList, action.payload],}           //a myList le estamos pasando una destructuracion de state.mylist estos son los elementos que ya posee state.myList los estamos volviendo a agregar en sate.mylist para que al ocurrir una nuva accion se mantenga los elementos que ya estaban en myList
//     };




//otra forma valida seria

// case 'SET_FAVORITE':
//     const exist = state.mylist.find(item => item.id === action.payload.id)
//     if (exist) return {...state}

//     return {
//       ...state,
//       mylist: [...state.mylist, action.payload]
//     }





//--- bsuqueda sin api

// case 'SEARCH_VIDEO':
//     return{
//         ...state,
//         search: state.trends.find(item => item.title.includes(action.payload.charAt(0).toUpperCase())) ||
//         // search : state.trends.find(item => item.title === (action.payload)) ||
//         state.originals.find(item => item.title === (action.payload)) ||
//         [],              
//     }