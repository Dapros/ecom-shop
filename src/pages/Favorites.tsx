import { NavLink } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
import Card from "../components/Card"
import { useMemo } from "react"

export default function Favorites() {

  const favorites = useAppStore((state) => state.favorites)

  const hasFavorites = useMemo(() => favorites.length === 0, [favorites])

  return (
    <>
    {hasFavorites ? (
      <div className="text-center w-1/2 mx-auto">
          <p className="text-md lg:text-2xl font-bold text-[#ed7449]">
            No hay favoritos agregados aun!
          </p>
            <NavLink
              to="/"
              className="text-sm lg:text-md text-blue-400 hover:text-blue-600 underline"
            >ir a Tienda para agregar</NavLink>
        </div>
    ) : (
        <div className="grid h-screen grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 px-10 md:p-0">
          {favorites.map( favorite => (
            <Card 
              key={favorite.id}
              product={favorite}
            />
          ))}
        </div>
    )}
    </>
  )
}
