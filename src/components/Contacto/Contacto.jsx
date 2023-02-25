import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

/* CSS */
import './Contacto.css';

/* CONTACTO */
export const Contacto = () => {
  const dataForm = React.useRef();
  let navigate = useNavigate();
  const {
    register, //Método del form
    formState: { errors }, //Extrae la prop errors del Obj
    getValues,
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    toast.success('Mensaje Enviado!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    e.target.reset(); //Reseteo el formulario
    setTimeout(() => {
      navigate('/'); //Redirijo a pagina inicial, luego de 1.5s
    }, 1500);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='formContainer'
        action=''
        ref={dataForm}>
        {/* Nombre */}
        <label htmlFor='name' className='form-label mb-0'>
          Nombre y Apellido
        </label>
        <input
          autoComplete='off'
          type='text'
          name='name'
          {...register('name', { required: true })}
          className='input form-control mb-2'
        />
        {errors.name?.type === 'required' && (
          <p className='errorMessage'>Este campo es requerido</p>
        )}

        {/* Email */}
        <label htmlFor='email' className='form-label mb-0'>
          Email
        </label>
        <input
          autoComplete='off'
          type='text'
          name='email'
          id='email'
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          className='input form-control mb-2'
        />
        {errors.email?.type === 'pattern' && (
          <p className='errorMessage'>Ingresa un email válido</p>
        )}
        {errors.email?.type === 'required' && (
          <p className='errorMessage'>Este campo es requerido</p>
        )}

        {/* Repetir Email */}
        <label htmlFor='email' className='form-label mb-0'>
          Repetir Email
        </label>
        <input
          autoComplete='off'
          type='text'
          name='repetirEmail'
          className='input form-control mb-2'
          id='repeatEmail'
          {...register('repeatEmail', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            validate: {
              matchesEmails: (repeatEmail) => {
                const { email } = getValues();
                return email === repeatEmail || '';
              },
            },
          })}
        />
        {errors.repeatEmail?.type === 'pattern' && (
          <p className='errorMessage'>Ingresa un email válido</p>
        )}
        {errors.repeatEmail?.type === 'required' && (
          <p className='errorMessage'>Este campo es requerido</p>
        )}

        {errors.repeatEmail?.type === 'matchesEmails' && (
          <p className='errorMessage'>El email no coincide</p>
        )}

        {/* Teléfono */}
        <label htmlFor='phone' className='form-label mb-0'>
          Teléfono
        </label>
        <input
          autoComplete='off'
          type='number'
          name='phone'
          className='input form-control mb-2'
          {...register('phone', {
            required: true,
            maxLength: 15,
            minLength: 9,
          })}
        />
        {errors.phone?.type === 'required' && (
          <p className='errorMessage'>Este campo es requerido</p>
        )}
        {(errors.phone?.type === 'minLength' ||
          errors.phone?.type === 'maxLength') && (
          <p className='errorMessage'>
            El campo debe tener entre 9 y 15 números
          </p>
        )}

        {/* Mensaje */}
        <label htmlFor='message' className='form-label mb-0'>
          Mensaje
        </label>
        <textarea
          autoComplete='off'
          name='message'
          {...register('message', { required: true })}
          className='input form-control mb-2'
          rows={3}
        />
        {errors.message?.type === 'required' && (
          <p className='errorMessage'>Este campo es requerido</p>
        )}

        {/* Suscribirse */}
        <label htmlFor='subscription' className='form-label mb-0'>
          Suscribirse a nuestro Newsletter
        </label>
        <select
          name='subscription'
          {...register('subscription')}
          id=''
          className='input form-select mb-2'>
          <option value='si'>Si</option>
          <option value='no'>No</option>
        </select>

        {/* Botón */}
        <button type='submit' className='btnPersonalizado btnForm mt0-'>
          Enviar
        </button>
      </form>
    </>
  );
};
