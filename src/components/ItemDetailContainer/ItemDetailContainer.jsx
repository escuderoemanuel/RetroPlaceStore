import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProducto } from '../../firebase/firebase';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducto(id) //Reemplazada el fetch
      .then((item) => {
        setProducto(item);
      });
  }, []);
  return (
    <div className='itemDetail'>
      <ItemDetail item={producto} />
    </div>
  );
};
