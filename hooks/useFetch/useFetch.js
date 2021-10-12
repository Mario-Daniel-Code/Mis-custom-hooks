import { useEffect, useRef } from "react";
import { useState } from "react";

//El url que me deben de proover o dar
export const useFetch = (url) => {
  
  /* Esta montado por que se esta renderizando la primera vez
  La idea del ismounted que mantenga la referencia cuando este
   hook esta vivo o cuando el componente que lo usa sigue montado */
  const isMounted = useRef(true);

  //La data en null es [], loading para que empieze hacer la carga y un error
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    /* cuando se desmonte entonces voy a 
    cambiar el valor de ese ismounted */
    return () => {
      /* Este cambio no va a disparar nuevamente la rederizacion
   de mi comp, solo mantiene la referencia al mismo */
      isMounted.current = false;
    };
    //la dependencia que solo lo haga cuando el compo se carga x primera vez
  }, []);

  /* Una vez que el url se recibe quiero disparar un efecto */
  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    //De la promesa extraigo la respuesta .json
    fetch(url)
      .then((resp) => resp.json())
      //obtengo la data
      .then((data) => {
        if (isMounted.current) {
          //si esta true todavia esta montado
          setState({
            //Voy a establecer el sig cambio
            loading: false, //Ya lo tenemos cargado x eso en false
            error: null, //Si llegamos a este punto no tenemos error
            data, //Que estoy recibiendo del endpoint
          });
        } 
      }).catch(()=> {
        setState({
          data: null, 
          loading: false, 
          error: 'No pudo cargarla info'
        })
      })
    //Quiero que se ejecute cuando el url cambia
  }, [url]);

  return state;
};
