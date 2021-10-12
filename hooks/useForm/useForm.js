import { useState } from "react";

//estado inicial va hacer igual a un objeto vacio name, email y pass
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }

  //una funcion que recibe el evento, desestructuramos el evento
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      //Esta propiedad que venga del objeto de target.value
      [target.name]: target.value,
      //por cada tecla que yo toco se empieza a disparar el hey
    });
  };

  //Que quiero retornar values el estado de formu y handleInputChange
  //estado del formulario y cambiar los valores del formulario
  return [values, handleInputChange, reset];
};
