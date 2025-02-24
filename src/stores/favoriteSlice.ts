import { StateCreator } from "zustand";
import { Product } from "../types";
import { StoreSliceType } from "./storeSlice";

export type FavoriteSliceType = {
  favorites: Product[]
  favoriteExiste: (id: Product['id']) => boolean // esta firma con boolean
  handleClickFavorite: (product: Product) => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & StoreSliceType, [], [], FavoriteSliceType> = (set, get) => ({
  favorites: [],
  checked: false,
  favoriteExiste: (id) => {
    //acccion - funcion que no necesita ser seteada ya que no setea ningun state
    return get().favorites.some( favorite => favorite.id === id) // esto quiere decir que retorna si existe al menos algun id de favorites que sea igual al del parametro
  },
  handleClickFavorite: (product) => {
    // si existe una coincidencia entre el favorite nuevo con el existente, entonces elimina o filtra todos los productos menos el mismo
    if(get().favoriteExiste(product.id)){
      set({
        favorites: get().favorites.filter(favorite => favorite.id !== product.id),
        modal: false
      })
    } else { // sino entonces agrega un favorite nuevo
      set({
        favorites: [...get().favorites, product],
      })
    }
  }
})