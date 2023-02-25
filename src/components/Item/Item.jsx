import { Link } from 'react-router-dom';
/* CSS */
import './Item.css';

//Context DarkMode
import { useDarkModeContext } from '../../context/DarkModeContext';

//Recibo un Objeto Item con sus props
export const Item = ({ item }) => {
  //Uso el DarkModeContext luego de importarlo
  const { darkMode } = useDarkModeContext();
  return (
    // Implemento en las card (Vista General) unas clases u otras dependiendo si está activado o no el darkMode
    <div
      className={`card mb-3 text-center cardProducto border-1 border p-0 ${
        darkMode ? 'text-white bg-transparent' : 'border-secondary-subtle'
      }`}>
      <img
        src={item.img}
        className='imgItem card-img-top'
        alt={`Imagen de ${item.nombre}`}
      />
      <div className='card-body cardBody'>
        <h5 className='card-title'>{item.nombre}</h5>
        <p className='card-text mt-0 mb-0'>
          $ {new Intl.NumberFormat('de-DE').format(item.precio)}
        </p>
        <button className='btnPersonalizado'>
          <Link className='nav-link' to={`/item/${item.id}`}>
            Ver Producto
          </Link>
        </button>
      </div>
    </div>
  );
};
