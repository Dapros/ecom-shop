import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const IndexPage = lazy(() => import('./pages/IndexPage'))
const Favorites = lazy(() => import('./pages/Favorites'))
const CartPage = lazy(() => import('./pages/CartPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <Suspense fallback="Cargando...">
              <IndexPage />
            </Suspense>
          } index/>
          <Route path="/favoritos" element={
            <Suspense fallback="Cargando...">
              <Favorites />
            </Suspense>
          } />
          <Route path="/carrito" element={
            <Suspense fallback="Cargando...">
              <CartPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
