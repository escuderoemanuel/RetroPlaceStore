import React from 'react';
import { useForm } from 'react-hook-form';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  createOrdenCompra,
  getOrdenCompra,
  getProducto,
  updateProducto,
} from '../../firebase/firebase';

//CSS
import './Checkout.css';

export const Checkout = () => {
  const { carrito, emptyCart, totalPrice } = useCarritoContext();
  const datosFormulario = React.useRef();
  let navigate = useNavigate();

  const consultarFormulario = (data, e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current); //Genera un objeto iterator con FormData (itera para regresar cada dato) del estado actual del form utilizando el '.current'
    const cliente = Object.fromEntries(datForm); //Recibe el objeto iterator del FormData y regresa los datos entries del form (clave:valor => mediante el atributo name en los input) y los regresa en un objeto 'cliente'

    const auxCarrito = [...carrito]; // Copia del carrito para manupilar y regresar luego

    auxCarrito.forEach((prodCarrito) => {
      getProducto(prodCarrito.id).then((prodDB) => {
        prodDB.stock -= prodCarrito.cant; //Descuento del stock la cantidad comprada
        updateProducto(prodCarrito.id, prodDB);
      });
    });

    createOrdenCompra(
      cliente,
      auxCarrito,
      totalPrice(),
      new Date().toISOString()
    ).then((ordenCompra) => {
      toast.success(
        `${cliente.name} gracias por tu compra!\nTu orden con el ID: ${
          ordenCompra.id
        } por un total de $${new Intl.NumberFormat('de-DE').format(
          totalPrice()
        )} fue realizada con exito.\nPronto te enviaremos los detalles por email.`
      );
      emptyCart();
      e.target.reset();
      navigate('/');
    });
  };

  //HOOK FORM
  const {
    register, //Función que registra los diferentes campos
    handleSubmit, // Gestiona el submit y el enter
    formState: { errors }, // Utilizar de formState solamente la prop errors
    getValues, // Para capturar valores y poder validar
  } = useForm();

  return (
    <div className='checkout'>
      {carrito.length === 0 ? (
        <>
          <h2>No hay productos para finalizar la compra</h2>
          <Link className='nav-link' to={'/'}>
            <button className='btnPersonalizado'>Continuar Comprando</button>
          </Link>
        </>
      ) : (
        <form
          onSubmit={handleSubmit(consultarFormulario)}
          ref={datosFormulario}
          className='formContainer'>
          <label htmlFor='name' className='form-label mb-0'>
            Nombre y Apellido
          </label>
          <input
            autoComplete='off'
            type='text'
            className='input form-control mb-2'
            name='name'
            {...register('name', { required: true, maxLength: 40 })}
          />
          {errors.name?.type === 'required' && (
            <p className='errorMessage'>Campo requerido</p>
          )}
          <label htmlFor='email' className='form-label mb-0'>
            Email
          </label>
          <input
            autoComplete='off'
            type='email'
            className='input form-control mb-2'
            name='email'
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email?.type === 'required' && (
            <p className='errorMessage'>Campo requerido</p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className='errorMessage'>Email inválido</p>
          )}
          <label htmlFor='repeatEmail' className='form-label mb-0'>
            Repetir Email
          </label>
          <input
            autoComplete='off'
            type='email'
            className='input form-control mb-2'
            name='repeatEmail'
            {...register('repeatEmail', {
              required: true,
              pattern: /\S+@\S+\.\S+/,
              validate: {
                emailValidator: (repeatEmail) => {
                  const { email } = getValues();
                  return email === repeatEmail || '';
                },
              },
            })}
          />
          {errors.repeatEmail?.type === 'required' && (
            <p className='errorMessage'>Campo requerido</p>
          )}
          {errors.repeatEmail?.type === 'pattern' && (
            <p className='errorMessage'>Email inválido</p>
          )}
          {errors.repeatEmail?.type === 'emailValidator' && (
            <p className='errorMessage'>Los emails no coinciden</p>
          )}
          <label htmlFor='phone' className='form-label mb-0'>
            Teléfono
          </label>
          <input
            autoComplete='off'
            type='number'
            className='input form-control mb-2'
            name='phone'
            {...register('phone', {
              required: true,
              minLength: 9,
              maxLength: 15,
            })}
          />
          {errors.phone?.type === 'required' && (
            <p className='errorMessage'>Campo requerido</p>
          )}

          {(errors.phone?.type === 'minLength' ||
            errors.phone?.type === 'maxLength') && (
            <p className='errorMessage'>
              El campo debe tener entre 9 y 15 números
            </p>
          )}

          <label htmlFor='address' className='form-label mb-0'>
            Dirección
          </label>
          <input
            autoComplete='off'
            type='text'
            className='input form-control mb-2'
            name='address'
            {...register('address', { required: true })}
          />
          {errors.address?.type === 'required' && (
            <p className='errorMessage'>Campo requerido</p>
          )}
          <button type='submit' className='btnPersonalizado btnForm mt0-'>
            Finalizar Compra
          </button>
        </form>
      )}
    </div>
  );
};
