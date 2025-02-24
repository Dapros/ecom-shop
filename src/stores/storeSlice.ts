import { StateCreator } from "zustand"
import { Categories, Category, Product, Products } from "../types"
import { getCategories, getProducts } from "../services/StoreService"
import { FavoriteSliceType } from "./favoriteSlice"


export type StoreSliceType = {
  products: Products
  selecProduct: Product[]
  categories: Categories
  selecCategory: Category['id']
  modal: boolean
  fetchProducts: () => Promise<void>
  selectedProduct: (id: Product['id']) => void
  filterProducts: (id: Product['id']) => void
  onCloseModal: () => void
  fetchCategories: () => Promise<void>
}

export const createStoreSlice : StateCreator<StoreSliceType & FavoriteSliceType, [], [], StoreSliceType> = (set, get) => ({
  products: [],
  selecProduct: [],
  categories: [],
  selecCategory: 0,
  modal: false,
  fetchProducts: async () => {
    console.log('desde store fetch')
    const products = await getProducts()
    set({
      products: products
    })
  },
  selectedProduct: (id) => {
    const select = get().products.filter(product => product.id === id)
    set({
      selecProduct: select.map(product => ({
        ...product,
        quantity: 1,
        Sumaryprice: product.price
      })),
      modal: true
    })
  },
  filterProducts: (id) => {
    set({
      selecCategory: id
    })
  },
  onCloseModal: () => {
    set({
      modal: false,
      selecProduct: []
    })
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories: categories
    })
  },
})