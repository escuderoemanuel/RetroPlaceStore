import { useContext, createContext, useState } from 'react';

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  //Si Existe el Producto en el Carrito
  const isInCart = (id) => {
    //Devuelve el producto (objeto) o undefined
    return carrito.find((prod) => prod.id === id);
  };

  //Vaciar Carrito
  const emptyCart = () => {
    //Reemplaza el contenido de setCarrito por un array vacío
    setCarrito([]);
  };

  //Eliminar Producto
  const removeItem = (id) => {
    //Devuelve un array con todos los productos con id diferente al id ingresado
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  //Cantidad Total de Productos en el Carrito
  const getItemQuantity = () => {
    //Va sumando las cantidades de cada producto en el carrito
    return carrito.reduce((acum, prod) => (acum += prod.cant), 0);
  };

  //Precio Total de la Compra
  const totalPrice = () => {
    //Voy sumando la multiplicación de cada producto * su precio
    return carrito.reduce((acum, prod) => (acum += prod.cant * prod.precio), 0);
  };

  //Agregar Producto
  const addItem = (producto, cantidad) => {
    //Si existe reemplazo la cantidad
    if (isInCart(producto.id)) {
      //Busca el índice del prod de acuerdo al id del producto solicitado en los props
      const indice = carrito.findIndex((prod) => prod.id === producto.id);
      //Crea un producto auxiliar con todo el carrito
      const aux = [...carrito];
      //Al índice en el auxiliar le reemplaza la cantidad
      aux[indice].cant = cantidad;
      //Setea el carrito con los datos del auxiliar y las cantidades modificadas
      setCarrito(aux);

      //Si no existe lo creo
    } else {
      //Crea un producto con todas las props que ya tiene + la cantidad ingresada
      const prodCart = {
        ...producto,
        cant: cantidad,
      };
      //Hace copia del carrito con los productos que ya tenía + el producto que se agrega por primera vez
      setCarrito([...carrito, prodCart]);
      /* Otra forma de agrega ese producto nuevo al array del carrito:
      const aux = [...carrito];
      aux.push(prodCart);
      setCarrito(aux);
      */
    }
  };

  //Exporta lo que se necesita en el contexto de la Aplicación
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addItem,
        removeItem,
        emptyCart,
        getItemQuantity,
        totalPrice,
      }}>
      {props.children}
    </CarritoContext.Provider>
  );
};
