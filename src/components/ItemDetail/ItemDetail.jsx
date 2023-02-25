import { ItemCount } from '../ItemCount/ItemCount';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

/* CSS */
import './ItemDetail.css';
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemDetail = ({ item }) => {
  const { darkMode } = useDarkModeContext();
  const { addItem } = useCarritoContext();

  //Agrega el item al carrito
  const onAdd = (cantidad) => {
    //Ejecuto la fn de addItem de CarritoContext
    addItem(item, cantidad);
  };

  return (
    //Card Personalizada de la vista detallada del producto seleccionado con VerProducto
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
        <p className='cardText'>Stock: {item.stock}</p>
        <p className='cardText'>
          Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}
        </p>
        <div className='itemCountContainer'>
          <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} />
        </div>
        <Link className='nav-link' to={'/cart'}>
          <button className='btnPersonalizado'>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};
