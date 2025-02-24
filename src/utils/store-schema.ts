import { z } from "zod";

// esquema de un solo producto - objeto en singular referencia a un solo producto!
export const ProductAPISchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    images: z.array(z.string()),
    category: z.object({
      id: z.number(),
      name: z.string(),
      image: z.string(),
    })
  })

// //extencion del schema para agregar tipos personalizados a mis schemas
// export const ProductoSchemaExtended = ProductAPISchema.extend({
//   quantity: z.number()

// })

// esquema de todos los productos - dentro de un array que es la forma que tienen los datos de la API
export const ProductsAPISchema = z.array(ProductAPISchema)

//esquema de una sola categoria . objeto que contiene una categoria
export const CategoryAPISchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
})

//esquema de todas las categorias - dentro del array que es la forma que tienen los datos de la API
export const CategoriesAPISchema = z.array(CategoryAPISchema)