import './App.css';
//Router
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//Componentes
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { ItemFooterContainer } from './ItemFooterContainer/Footer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

//FIREBASE
// import { cargarDB, getProducto } from '../firebase/firebase';

//App
const App = () => {
  // cargarDB();
  // getProductos();
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <DarkModeProvider>
            {' '}
            {/* Encapsulo el alcance del DarkMode */}
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route
                path='/category/:idCategoria'
                element={<ItemListContainer />}
              />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <ItemFooterContainer />
          </DarkModeProvider>
          <ToastContainer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
