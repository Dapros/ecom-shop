import { ShoppingBagIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useAppStore } from '../stores/useAppStore'
import { useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import CartCard from '../components/CartCard'
import { formatterPeso } from '../utils/currency'


export default function CartPage() {

  const cart = useAppStore((state) => state.cart)
  const subTotal = useAppStore((state) => state.subTotal)
  const addSubTotal = useAppStore((state) => state.addSubTotal)
  
  const envio = useAppStore((state) => state.envio)
  const IVA = useAppStore((state) => state.IVA)
  const total = useAppStore((state) => state.total)
  const addIva = useAppStore((state) => state.addIva)
  const sumTotal = useAppStore((state) => state.sumTotal)

  const hascart = useMemo(() => cart.length === 0 , [cart])

  useEffect(() => {
    addSubTotal(), cart, IVA, addIva(), total, sumTotal()
  }, [addSubTotal, cart, IVA, addIva, total, sumTotal])

  return (
    <>
      {hascart ? (
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-md lg:text-2xl font-bold text-[#ed7449]">
                No hay productos agregados en tu carrito
              </p>
              <div className='space-x-1 flex items-center text-center'>
                <span className='text-sm lg:text-md'>Visita alguno</span>
                <NavLink
                  to="/"
                  className="text-sm lg:text-md text-blue-400 hover:text-blue-600 underline"
                >tienda </NavLink>
                <NavLink
                  to="/favoritos"
                  className="text-sm lg:text-md text-blue-400 hover:text-blue-600 underline"
                >favoritos </NavLink>
                <span className='text-sm lg:text-md'>para agregar</span>
              </div>
            </div>
          ) : (
            <>
              <div className='flex items-center justify-center space-x-2'>
                <ShoppingBagIcon  className='h-5 md:h-7'/>
                <p className='text-sm md:text-xl font-bold'>Mi carrito</p>
              </div>

              <div className='flex-1 lg:flex w-full mt-10 space-y-5 lg:space-x-5 items-start'>
                <div className='flex-1 w-full lg:w-[70%]'>
                  {cart.map( prevCart => (
                    <CartCard 
                      key={prevCart.id}
                      cart={prevCart}
                    />
                  ))}
                </div>

                <div className='px-5 pt-8 pb-5 bg-gray-100 rounded-lg w-full lg:w-[30%] h-92 flex flex-col justify-between'>
                  <h4 className='text-xl font-medium'>Resumen del pedido</h4>
                  <div className='mt-8 space-y-4'>
                    <div className='flex items-center justify-between border-slate-600 border-b pb-2'>
                      <p className='text-slate-600'>Subtotal</p>
                      <p className='font-medium'>{formatterPeso(subTotal)}</p>
                    </div>
                    <div className='flex items-center justify-between border-slate-600 border-b pb-2'>
                      <div className='flex items-center'>
                        <p className='text-slate-600'>
                          Envio
                        </p>
                        <div className='h-5 px-2 cursor-pointer relative inline-block group'>
                          <QuestionMarkCircleIcon className='h-5 cursor-pointer text-slate-600 animate-wiggle'></QuestionMarkCircleIcon>
                          <div className='absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-72'>
                            Valor de ejemplo - se puede cambiar en el codigo
                          </div>
                        </div>
                      </div>
                      
                      <p className='font-medium'>{formatterPeso(envio)}</p>
                    </div>
                    <div className='flex items-center justify-between border-slate-600 border-b pb-2'>
                    <div className='flex items-center'>
                        <p className='text-slate-600'>
                          Impuesto - IVA
                        </p>
                        <div className='h-5 px-2 cursor-pointer relative inline-block group'>
                          <QuestionMarkCircleIcon className='h-5 cursor-pointer text-slate-600 animate-wiggle'></QuestionMarkCircleIcon>
                          <div className='absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-72'>
                            Valor de ejemplo - se puede cambiar en el codigo
                          </div>
                        </div>
                      </div>
                      <p className='font-medium'>{formatterPeso(IVA)}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <p className='font-medium uppercase'>Total</p>
                      <p className='font-medium'>{formatterPeso(total)}</p>
                    </div>
                  </div>
                  <button
                    className='text-center w-full bg-[#ed7449] hover:bg-[#eb6231] mt-5 text-white font-bold text-xl py-2 rounded-md cursor-pointer'
                  >
                    Continuar Pago
                  </button>
                </div>
              </div>
            </>
          )}
    </>
  )
}
