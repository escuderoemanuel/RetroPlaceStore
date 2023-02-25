// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'retroplacestore.firebaseapp.com',
  projectId: 'retroplacestore',
  storageBucket: 'retroplacestore.appspot.com',
  messagingSenderId: '382528651126',
  appId: '1:382528651126:web:c926cf1d21d64671c54457',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(); //Consulto la base de datos

//CRUD DE PRODUCTOS (OPERACIONES QUE PUEDO HACER CON MI BASE DE DATOS - CREATE - READ - UPDATE -DELETE)
export const cargarDB = async () => {
  const promise = await fetch('./json/productos.json');
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(db, 'productos'), {
      // id: prod.id, (En las DB los id son autogenerados)
      idCategoria: prod.idCategoria,
      nombre: prod.nombre,
      marca: prod.marca,
      modelo: prod.modelo,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img,
    });
  });
};

//Para consultar cada uno de los elementos
export const getProductos = async () => {
  const productos = await getDocs(collection(db, 'productos'));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

//Para consultar un único producto
export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, 'productos', id));
  const item = { ...producto.data(), id: producto.id };
  return item;
};

//Actualizar Producto
export const updateProducto = async (id, info) => {
  await updateDoc(doc(db, 'productos', id), info);
};

//Eliminar Producto
export const deleteProducto = async (id) => {
  await deleteDoc(doc(db, 'productos', id));
};

//Orden de Compra
export const createOrdenCompra = async (
  cliente,
  productos,
  precioTotal,
  fecha
) => {
  const ordenCompra = await addDoc(collection(db, 'ordenCompra'), {
    datosCliente: cliente,
    productos: productos,
    precioTotal: precioTotal,
    fecha: fecha,
  });
  return ordenCompra;
};

//Para consultar la Orden de Compra
export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, 'ordenCompra', id));
  const compra = { ...ordenCompra.data(), id: ordenCompra.id };
  return compra;
};
