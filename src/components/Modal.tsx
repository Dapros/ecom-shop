// icono con star con Outline y solid para traerlos ambos
import { XMarkIcon } from '@heroicons/react/24/solid'


import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useAppStore } from '../stores/useAppStore'
import { formatterPeso } from '../utils/currency'

export default function Modal() {
  
  const modal = useAppStore((state) => state.modal)
  const onCloseModal = useAppStore((state) => state.onCloseModal)
  const selecProduct = useAppStore((state) => state.selecProduct)


  return (
    <>
      <Dialog open={modal} as="div" className="relative z-10 focus:outline-none" onClose={onCloseModal}>
        <div className="fixed inset-0 z-10 bg-black/70 w-screen overflow-y-auto transition-colors">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-xl bg-white p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-2xl"
            >
              {selecProduct.map(product => (
                <div>
                  <div className='relative'>
                    <DialogTitle as="h3" className="font-medium text-[#063263] rounded drop-shadow-xl text-xl px-2 py-1 w-fit absolute -top-3 -left-1 bg-[#ed7449] shadow-lg">
                      {product.title}
                    </DialogTitle>
                    <p className='text-6xl absolute flex items-baseline font-bold text-[#063263] bottom-2 right-2 bg-[#ed7449] rounded-lg py-1 px-2 shadow-lg'>
                      {formatterPeso(product.price)}
                      <span className='text-sm font-bold'> COP</span>
                    </p>
                    <img 
                      src={product.images[0]} 
                      alt="producto" 
                      className='rounded-md shadow'
                    />
                  </div>
                    <p className='mt-2 text-sm text-black'>
                      <span className='font-bold'>Categoria: </span>
                      {product.category.name}
                    </p>
                  <p className="mt-2 text-sm text-black">
                    <span className='font-bold'>Descripcion: </span>
                    {product.description}
                  </p>

                  <div className='mt-4 flex items-center space-x-2'>
                    <Button
                      onClick={() => onCloseModal()}
                      className='flex items-center justify-center rounded-xl bg-[#063263] py-2.5 px-5 text-center text-sm font-medium text-white hover:bg-[#052a54] focus:outline-none focus:ring-[#ed7449] focus:ring-2 w-full'
                    >
                      <XMarkIcon
                        className='h-6 pr-2'
                      />
                      Cerrar
                    </Button>
                  </div>
                </div>
              ))}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}