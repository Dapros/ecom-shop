import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="w-full md:w-2/3 mx-auto md:justify-between justify-around mt-10">
        <Outlet />
        <Modal />
      </main>
    </>
  )
}
