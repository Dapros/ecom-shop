import { useEffect, useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import Card from "../components/Card"

export default function IndexPage() {

  const products = useAppStore((state) => state.products)
  const fetchProducts = useAppStore((state) => state.fetchProducts)
  const selecCategory = useAppStore((state) => state.selecCategory)

  // Este efecto se ejecuta cuando el componente se monta. conecta el store con este componente
  useEffect(() => {
    fetchProducts() // Llama a la función fetchProducts para cargar los productos desde el store.
  }, [fetchProducts]) // mira cuando fetchProducts cambie y hace que el efecto se ejecute de nuevo

  // revisa dos state, selectCategory (Que es un number que capturo el onChange desde el header) si selecCategori tiene algo entonces filtra productos donde el id de la categoria del producto sea igual al selecCategori, sino renderizara todos los products como estan!
  const filterProducts = selecCategory ? products.filter(product => product.category.id === selecCategory) : products
  
  //si ocurrio algun error o no se renderiza nada entonces
  const noLoad = useMemo(() => filterProducts.length === 0, [filterProducts])

  return (
    <>
      { noLoad ? (
        <div className="text-center w-1/2 mx-auto">
          <p className="text-md lg:text-2xl font-bold text-[#ed7449]">
            No cargo o no hay productos en la API
          </p>
          <a 
            href="https://fakeapi.platzi.com/"
            target="_blank"
            className="text-sm lg:text-md text-blue-400 hover:text-blue-600 underline"
          >visitar pagina de la API</a>
        </div>
        ) : (
          <div className="grid h-screen grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 px-10 md:p-0">
            {filterProducts.map(product => (
              <Card 
                key={product.id}
                product={{
                  ...product,
                  quantity: 1,
                  Sumaryprice: product.price
                }}
              />
            ))}
          </div>
        )} 
    </>
  )
}
