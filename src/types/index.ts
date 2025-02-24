import { z } from "zod";
import { CategoriesAPISchema, CategoryAPISchema, ProductAPISchema, ProductsAPISchema } from "../utils/store-schema";

//producto - productos
// export type Product = z.infer<typeof ProductAPISchema>
export type Products = z.infer<typeof ProductsAPISchema>

//categoria - categorias
export type Category = z.infer<typeof CategoryAPISchema>
export type Categories = z.infer<typeof CategoriesAPISchema>

// forma de hacerlo directamente desde los tipos y no en lo schemas
export type APIresponse = z.infer<typeof ProductAPISchema>
export type Product = APIresponse & {
  quantity: number
  Sumaryprice: number
}