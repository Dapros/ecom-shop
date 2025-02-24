# 🛒Proyecto: Ecom Shop

Este proyecto ha sido desarrollado con **React** y **TypeScript**, aprovechando la potencia de **Zustand** para la gestión del estado, **React Router DOM** para la navegación, y **TailwindCSS** para el diseño de la interfaz.

* [Ver sitio en Netlify]()

## Descripción

La aplicación consulta productos de un ecommerce de prueba, obtenidos de la [Platzi Fake Store API](https://fakeapi.platzi.com/). Permite a los usuarios explorar todos los productos o filtrarlos por categorías. Además, ofrece la opción de previsualizar un producto para ver sus detalles, agregarlo a favoritos o incorporarlo directamente al carrito.

## 🚀Funcionalidad
La aplicación ofrece las siguientes características:

* 🔍 **Visualización completa de productos.**
* 🗂️ **Filtrado de productos por categoría.**
* 👁️ **Previsualización detallada de cada producto.**
* ❤️ **Agregado de productos a favoritos.**
* 🛒 **Incorporación de productos al carrito de compras.**
* ❌ **Eliminación de productos de favoritos y carrito.**
* ➕/➖ **Ajuste de la cantidad de productos en el carrito.**

#### **Cálculos del Carrito**

1. 🏷️ Multiplicación del valor del producto por su cantidad.
2. ➕ Cálculo del subtotal de los productos.
3. 🚚 Aplicación de un precio de envío fijo (prueba).
4. 💸 Cálculo del IVA (16% de la compra).
5. 💰 Suma total de los valores anteriores.

## 🛠️ Dependencias Utilizadas

A continuación, se presenta una tabla con las dependencias utilizadas en el proyecto:

| Dependencia                                                 | Descripción                                         |
| ----------------------------------------------------------- | --------------------------------------------------- |
| **[Zod](https://www.npmjs.com/package/zod)**                | Validación de datos mediante esquemas.              |
| **[Axios](https://www.npmjs.com/package/axios)**            | Cliente HTTP para realizar solicitudes.             |
| **[React Router DOM](https://www.npmjs.com/package/react-router-dom)** | Gestión de rutas en la aplicación.                  |
| **[Heroicons](https://heroicons.com/)**                     | Conjunto de iconos modernos para interfaces.        |
| **[HeadlessUI](https://headlessui.dev/)**                   | Componentes UI sin estilos predefinidos.             |



***✨ Gracias por leer! 😃***
`Por: Sergio Romero`