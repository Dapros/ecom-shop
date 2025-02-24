import { create } from "zustand";
import { createStoreSlice, StoreSliceType } from "./storeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { CartSliceType, createCartSlice } from "./cartSlice";


export const useAppStore = create<StoreSliceType & FavoriteSliceType & CartSliceType>()(devtools((...a) => ({
  ...createStoreSlice(...a),
  ...createFavoriteSlice(...a),
  ...createCartSlice(...a)
})))