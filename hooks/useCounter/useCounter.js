import { useState } from "react";
/* Lo inicializamos con valor de 10
 Este custom hook esta extayendo la logica de mi contador */
export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); //10

  //Si llama esta funcion incrementa
  const increment = () => {
    //Si tuvieramos un argumento factor = 1
    //solo llama al setState del state actual + 1
    //setState(state + 1);
    setCounter(counter + 1);
  };

  //Si llama esta funcion decrementa
  const decrement = () => {
    //Si tuvieramos un argumento factor = 1
    //solo llama al setState del state actual + 1
    //setState(state - 1);
    setCounter(counter - 1);
  };

  //Reinicar al numero actual
  const reset = () => {
    //El valor es de initialState es de 100
    setCounter(initialState);
  };

  return {
    /* En el estado va a tener las 2 funciones */
    counter,
    increment,
    decrement,
    reset,
  };
};


/*
import { useState } from "react";
 Lo inicializamos con valor de 10
 Este custom hook esta extayendo la logica de mi contador 
 export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState); //10

  //Si llama esta funcion incrementa
  const increment = (factor = 1) => {
    //Si tuvieramos un argumento factor = 1
    //solo llama al setState del state actual + 1
    //setState(state + 1);
    setState(state + factor);
  };

  //Si llama esta funcion decrementa
  const decrement = (factor = 1) => {
    //Si tuvieramos un argumento factor = 1
    //solo llama al setState del state actual + 1
    //setState(state - 1);
    setState(state - factor);
  };

  //Reinicar al numero actual
  const reset = () => {
    //El valor es de initialState es de 100
    setState(initialState);
  };

  return {
    En el estado va a tener las 2 funciones 
    state,
    increment,
    decrement,
    reset,
  };
};
 
 */