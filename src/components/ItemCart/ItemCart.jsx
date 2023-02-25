import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';

// El Objeto Item que va a mostrarse en el carrito
export const ItemCart = ({ item }) => {
  const { removeItem } = useCarritoContext();

  return (
    // Plantilla Item con las props del Objeto Item
    <div className='cardPersonalizada'>
      <div className='imgContainer'>
        <img
          className='imgProducto'
          src={item.img}
          alt={`Imagen de ${item.nombre}`}
        />
      </div>
      <div className='cardDetail'>
        <h5 className='cardTitle'>{item.nombre}</h5>
        <p className='cardText'>Modelo: {item.modelo}</p>
        <p className='cardText'>Marca: {item.marca}</p>
        <p className='cardText'>Cantidad: {item.cant}</p>
        <p className='cardText'>
          Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}
        </p>
        <p className='cardText'>
          Subtotal: $
          {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}
        </p>

        <button
          className='btnPersonalizado'
          onClick={() => removeItem(item.id)}>
          {' '}
          Borrar Producto
        </button>
      </div>
    </div>
  );
};
