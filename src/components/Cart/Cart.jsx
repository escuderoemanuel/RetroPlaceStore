import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';
/* CSS */
import './Cart.css';

export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <div className='cart'>
      {/* Lógica del carrito, dependiendo el estado del mismo */}
      {carrito.length === 0 ? (
        //Carrito Vacío
        <>
          <h2>Carrito Vacío</h2>
          <Link className='nav-link' to={'/'}>
            <button className='btnPersonalizado'>Continuar Comprando</button>
          </Link>
        </>
      ) : (
        //Carrito con Productos
        <div className='container cartContainer'>
          {<ItemList products={carrito} plantilla={'itemCart'} />}
          <div className='divButtons'>
            <p>
              Resumen de la Compra: $
              {new Intl.NumberFormat('de-DE').format(totalPrice())}
            </p>
            <button className='btnPersonalizado' onClick={() => emptyCart()}>
              Vaciar Carrito
            </button>
            <Link className='nav-link' to={'/'}>
              <button className='btnPersonalizado'>Continuar Comprando</button>
            </Link>
            <Link className='nav-link' to={'/checkout'}>
              <button className='btnPersonalizado'>Finalizar Compra</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
