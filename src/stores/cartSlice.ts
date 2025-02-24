import { StateCreator } from "zustand";
import { Product } from "../types";

export type CartSliceType = {
  cart: Product[]
  subTotalList: number[]
  subTotal: number
  envio: number
  IVA: number
  total: number
  cartExist: (id: Product['id']) => boolean
  handleClickCart: (cart: Product) => void
  increaseQuantity: (cart: Product['id']) => void
  decreseQuantity: (cart: Product['id']) => void
  multiplyQuantity: (id: number, sumprice: number) => void
  addSubTotal: () => void
  addIva: () => void
  sumTotal: () => void
}

export const createCartSlice : StateCreator<CartSliceType> = (set, get) => ({
  cart: [],
  subTotalList: [],
  subTotal: 0,
  envio: 25,
  IVA: 0,
  total: 0,
  cartExist: (id) => {
    return get().cart.some( car => car.id === id)
  },
  handleClickCart: (cart) => {
    if(get().cartExist(cart.id)){ // si existe lo borra, filtrando todos exepto el mismo
      set({
        cart: get().cart.filter( prevcar => prevcar.id !== cart.id)
      })
    } else { // sino entonces lo agrega y asigna quantity en 1
      set({
        cart: [...get().cart, {...cart, quantity : 1, Sumaryprice: 1}]
      })
    }
  },
  increaseQuantity: (id) => {
    set({
      cart: get().cart.map(product => product.id === id && product.quantity < 5 ? {...product, quantity: product.quantity + 1 } : product)
    })
  },
  decreseQuantity: (id) => {
    set({
      cart: get().cart.map(product => product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity - 1} : product)
    })
  },
  multiplyQuantity: (id, sumprice) => {
    set({
      cart: get().cart.map(product => product.id === id && product.quantity ? {...product, Sumaryprice: sumprice * product.quantity } : product)
    })
  },
  addSubTotal: () => {
    //extrae el SumaryPrice de cada producto del carrito y lo agrega en arraySumaryprice
    const arraySumaryprice = get().cart.map(product => product.Sumaryprice)
    set({
      // luego seteo subTotal de tipo numero, con la suma de todos sus elementos. Para eso utilizo reduce que itera sobre cada elemento del array y aplica una funcion acumuladora que va "reduciendo" todos los elementos a un solo valor.
      subTotal: arraySumaryprice.reduce((acc, num) => acc + num, 0) //para mas informacion "leer mdn web docs"
    })
  },
  addIva: () => {
    set({
      IVA: get().subTotal * 0.16
    })
  },
  sumTotal: () => {
    set({
      total: get().subTotal + get().envio + get().IVA
    })
  }
})