import axios from "axios"
import { CategoriesAPISchema, ProductsAPISchema } from "../utils/store-schema"

export async function getProducts(){
  const url = 'https://api.escuelajs.co/api/v1/products'
  const { data } = await axios(url)
  const result = ProductsAPISchema.safeParse(data)
  if(result.success){
    return result.data
  }
}

export async function getCategories() {
  const url = 'https://api.escuelajs.co/api/v1/categories'
  const { data } = await axios(url)
  const result = CategoriesAPISchema.safeParse(data)
  if(result.success){
    return result.data
  }
}

