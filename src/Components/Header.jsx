import React from 'react';
import Banner from '../img/banner.png';

const Header = ({setBusqueda}) => {
  return (
    <>
        <nav className='navbar navbar-expand-lg mb-5 p-4 d-flex justify-content-between'
                style={{backgroundImage: `url(${Banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>
            <div className='container'>
                <h3 className='label'>Gamer Library</h3>
                <form className='d-flex'>
                    <input
                        className='form-control me-2'
                        type='text'
                        placeholder='Buscar Juego'
                        onChange={(e) => {setBusqueda(e.target.value)}} /* almacenando valor del input de busqueda en el evento onChange */
                    />
                </form>
            </div>
        </nav>
    </>
  )
}

export default Header