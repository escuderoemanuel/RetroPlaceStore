import { useState } from 'react';
import { toast } from 'react-toastify';

//CSS
import './ItemCount.css';

export const ItemCount = ({ valInicial, stock, onAdd }) => {
  const [contador, setContador] = useState(valInicial);
  //Var       //Modificar var     //Estado inicial

  const sumar = () => contador < stock && setContador(contador + 1); //contador = contador + 1
  const restar = () => contador > valInicial && setContador(contador - 1); //Operador ternario sin else
  const addCart = () => {
    onAdd(contador);
    toast.success(`Agregaste ${contador} Producto/s!`, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <div className='itemCount'>
      <div className='btnCount'>
        <button className='btnPersonalizadoMin me-2' onClick={() => restar()}>
          -
        </button>
        {contador}
        <button className='btnPersonalizadoMin ms-2' onClick={() => sumar()}>
          +
        </button>
      </div>

      <button className='btnPersonalizadoMid' onClick={() => addCart()}>
        Agregar al Carrito
      </button>
    </div>
  );
};
