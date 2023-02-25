import { Link } from 'react-router-dom';

const Secciones = () => {
  return (
    <>
      <li className='nav-item'>
        <Link className='nav-link active' to={'/'}>
          <button className='linkBtn'>Inicio</button>
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link active' to={'/contacto'}>
          <button className='linkBtn'>Contacto</button>
        </Link>
      </li>
    </>
  );
};

export default Secciones;
