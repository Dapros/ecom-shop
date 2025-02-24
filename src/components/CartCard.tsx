import { XMarkIcon } from "@heroicons/react/24/solid"
import { Product } from "../types"
import { formatterPeso } from "../utils/currency"
import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"

type CartCardProps = {
  cart: Product
}

export default function CartCard({cart}: CartCardProps) {
  const multiplyQuantity = useAppStore((state) => state.multiplyQuantity)
  const handleClickCart = useAppStore((state) => state.handleClickCart)
  const increaseQuantity = useAppStore((state) => state.increaseQuantity)
  const decreseQuantity = useAppStore((state) => state.decreseQuantity)


  //actualizacion del price cada vez que cambie la cantidad
  useEffect(() => {
    multiplyQuantity(cart.id, cart.price)
  }, [cart.quantity, cart.price, multiplyQuantity])
  
  return (
    <div className="first:border-t border-slate-600 border-b py-5">
      <div className="flex space-x-5">
        <div className="flex rounded-xl w-72 overflow-hidden cursor-pointer">
          <img 
            src={cart.images[0]} 
            alt="Imagen de producto" 
            className="object-cover rounded-xl hover:scale-125 transition-transform hover:rotate-2"
          />
        </div>

        <div className="w-full flex items-start justify-between">
          <div>
            <h4 className="text-md">{cart.title}</h4>
            <p className="text-sm text-slate-700">
              {cart.category.name}
            </p>
            <p className="text-sm">
              {formatterPeso(cart.Sumaryprice)}
            </p>
          </div>
          <div className="flex border rounded px-2 py-1 items-center space-x-2">
            
            <button className="cursor-pointer"
              onClick={() => increaseQuantity(cart.id)}
            >+</button>
            <p>{cart.quantity}</p>
            <button className="cursor-pointer"
              onClick={() => decreseQuantity(cart.id)}
            >-</button>
            
          </div>
          <button 
            className="hover:text-red-400 cursor-pointer"
            onClick={() => handleClickCart(cart)}
          >
            <XMarkIcon className="h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
