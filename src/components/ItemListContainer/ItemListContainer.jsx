import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Componentes
import { ItemList } from '../ItemList/ItemList';

// Context
import { useDarkModeContext } from '../../context/DarkModeContext';

//Firebase
import { getProductos } from '../../firebase/firebase';

//ItemListContainer
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const { darkMode } = useDarkModeContext();
  useEffect(() => {
    if (idCategoria) {
      getProductos() //En lugar del fetch consultando el json
        .then((items) => {
          const products = items
            .filter((prod) => prod.stock > 0)
            .filter((prod) => prod.idCategoria === idCategoria);
          const productsList = (
            <ItemList products={products} plantilla={'item'} />
          ); //Array de productos en JSX
          setProductos(productsList);
        });
    } else {
      getProductos() //En lugar del fetch consultando el json
        .then((items) => {
          const products = items.filter((prod) => prod.stock > 0);
          const productsList = (
            <ItemList products={products} plantilla={'item'} />
          ); //Array de productos en JSX
          setProductos(productsList);
        });
    }
  }, [idCategoria]);
  return <div className='row cardProductos'>{productos}</div>;
};
