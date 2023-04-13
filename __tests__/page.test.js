/* eslint-disable no-undef */
/*
- describe recibe 2 argumentos, 1.- descripción de lo que queremos probar(nombre del archivo), 2.- función
con más acciones para probar. Se pueden anidar describes para probar varias cosas dentro del mismo archivo.

- it recibe primero el nombre de lo que vamos a probar, y luego una fn también.

- expect recibe un valor y luego podemos indicar a qué queremos que sea igual este valor.
*/

const add = () => 2 + 2

describe('Page', () => {
  describe('getSuma', () => {
    it('suma 2 + 2', () => {
      expect(add()).toBe(4)
    })
  })
  describe('Component', () => {
    it('se renderiza', () => {

    })
  })
})
