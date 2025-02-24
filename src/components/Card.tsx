// icono con star con Outline y solid para traerlos ambos
import { ShoppingCartIcon, XMarkIcon, StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

import { Product } from "../types"
import { formatterPeso } from '../utils/currency'
import { useAppStore } from '../stores/useAppStore'

type CartType = {
  product: Product
}

export default function Card({product}: CartType) {

  const selectedProduct = useAppStore((state) => state.selectedProduct)
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
  const favoriteExiste = useAppStore((state) => state.favoriteExiste(product.id))
  const handleClickCart = useAppStore((state) => state.handleClickCart)
  const cartExist = useAppStore((state) => state.cartExist(product.id))

  // funcion para extraer URLs validas de un string
  const extractUrls = (str: string): string[] => {
    // se eliminan las barras invertidas innecesarias
    const cleaned = str.replace(/\\+/g, '') // la expresion regular "/\\+/g" busca una o mas barras invertidas si es asi las reemplaza por vacio en string es decir ''
    // Regex, expresion regular para validar URLs (http o https)
    const regex = /(https?:\/\/[^\s"'\]]+)/g
    // el return indica; cleaned cumple con la expresion regular regex, o una array vacio 
    return cleaned.match(regex) || []
  }

  const validImage = (): string => {
    const images = product.images
    if(!images || images.length === 0) return '/public/unknown.svg'
    for(let img of images){
      // si el elemento es un array (caso anidado que retorna image de la API), lo unimos en un string - si img es un array 
      if(Array.isArray(img)){
        img = img.join(' ') // join concatena todos los elementos del array en un unico string
      }

      //se eliminan espacios extras
      const trimmed = img.trim()

      // extraemos todas las URLs que se pueden estar en el string
      const urls = extractUrls(trimmed)
      if(urls.length > 0){
        // Retornamos la primera URL valida
        return urls[0]
      }
    }
    // Si no se encuentra ninguna URL válida, se puede retornar un valor por defecto o un string vacío
    return '/public/unknown.svg'
  }

  return (
    <>
      <div className="w-full shadow-xl p-2 rounded-2xl flex flex-col justify-between h-fit">
        <button 
          className="flex rounded-xl h-full overflow-hidden cursor-pointer"
          onClick={() => selectedProduct(product.id)}
        >
          <img 
            src={validImage()} 
            alt="Producto"
            className="w-full object-cover rounded-xl h-96 hover:scale-125 transition-transform hover:rotate-2"
          />
        </button>

        <div className="mt-4">
          <div className='flex justify-between items-center'>
            <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
            <div>
              <p className="text-2xl font-bold text-[#ed7449] flex items-baseline">
                {formatterPeso(product.price)}
                <span className='text-sm font-bold'> COP</span>
              </p>
            </div>
          </div>
          <p className='text-sm mt-2'>Categoria: 
            <span 
              key={product.category.id}
              className='font-bold text-[#ed7449] hover:underline'
            > {product.category.name}</span>
          </p>
          <div className='flex items-center space-x-2 mt-2'>
            <button 
              className='border rounded-xl p-2 cursor-pointer'
              onClick={() => handleClickFavorite(product)}
            >
              {favoriteExiste ? (
                <StarIconSolid className='h-6 text-[#FFFF00] stroke-black transition-transform duration-200 ease-in-out hover:scale-110'/>
              ) : (
                <StarIconSolid className='h-6 text-white stroke-black transition-transform duration-200 ease-in-out hover:scale-110' />
              )}
            </button>
            <button 
              className={`flex items-center justify-center rounded-xl py-2.5 px-5 text-center text-sm font-medium text-white bg-[#063263] hover:bg-[#052a54] focus:outline-none focus:ring-[#ed7449] focus:ring-2 w-full cursor-pointer ${cartExist && "bg-red-600 hover:bg-red-800" }`}
              onClick={() => handleClickCart(product)}
            >
              {cartExist ? (
                <XMarkIcon className='h-6 pr-2' />
              ) : (
                <ShoppingCartIcon
                  className='h-6 pr-2'
                />
              )}
              {cartExist ? 'Eliminar de Carrito' : 'Añadir a Carrito'}</button>
          </div>
        </div>
      </div>
    </>
  )
}
