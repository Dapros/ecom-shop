import { NavLink, useLocation  } from 'react-router-dom'
import {ChangeEvent, useEffect, useMemo } from 'react'
import { useAppStore } from '../stores/useAppStore'

export default function Header() {

  const {pathname} = useLocation()
  const isStore = useMemo(() => pathname === '/' ,[pathname])

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const categories = useAppStore((state) => state.categories)
  const filterProducts = useAppStore((state) => state.filterProducts)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    const isNumberField = ['category'].includes(name)
    const id = isNumberField ? +value : +value
    filterProducts(id)
  }

  return (
    <>
      <header className='py-4 bg-[#063263]'>
        <div className='flex items-center w-full md:w-2/3 mx-auto md:justify-between justify-around'>
          <div>
            <img 
              src="/public/Icon.svg" 
              alt="ICONO"
              className='w-23'
            />
            <p className='text-center text-[#ed7449] font-bold'>eCom Shop</p>
          </div>

          <nav className='flex items-center space-x-2 md:space-x-5 text-lg text-white font-bold'>
            <NavLink
              to="/"
              className={({isActive}) => isActive ? 'text-[#ed7449]' : 'text-white' }
            >Tienda</NavLink>
            <NavLink
              to="/favoritos"
              className={({isActive}) => isActive ? 'text-[#ed7449]' : 'text-white' }
            >Favoritos</NavLink>
            <NavLink
              to="carrito"
              className={({isActive}) => isActive ? 'text-[#ed7449]' : 'text-white' }
            >
              Carrito</NavLink>
          </nav>
        </div>
        {isStore && (
          <form>
            <div className='flex items-center w-full md:w-2/3 mx-auto justify-around md:justify-normal mt-5 space-x-5 border-t-1 pt-2 border-[#ed7449]'>
                  <select 
                    name="category" 
                    id="category"
                    className='px-3 py-1 rounded focus:outline-none text-white bg-[#ed7449] shadow'
                    onChange={handleChange}
                  >
                    <option value="">-- Filtro por categoria --</option>
                {categories.map( category => (
                  <option
                    key={category.id}
                    value={category.id}
                  >{category.name}</option>
                ))}
              </select>
            </div>
          </form>
        )}
      </header>
    </>
  )
}
