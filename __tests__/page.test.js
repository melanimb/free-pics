/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
// import App from '../app/page'
import { NavSearchbar } from 'components'

/*
- describe recibe 2 argumentos, 1.- descripción de lo que queremos probar(nombre del archivo), 2.- función
con más acciones para probar. Se pueden anidar describes para probar varias cosas dentro del mismo archivo.

- it recibe primero el nombre de lo que vamos a probar, y luego una fn también.

- expect recibe un valor y luego podemos indicar a qué queremos que sea igual este valor.

- render es para comprobar que se renderiza lo que quieres.

- screen tiene varios métodos para comprobar que en pantalla se encuentra lo que indiques.
- getByText recibe literalmente el texto del elemento a buscar en la pantalla/componente.
*/

describe('App', () => {
  describe('NavSearchbar', () => {
    it('renders', () => {
      render(
        <NavSearchbar />
      )
    })
  })
})
