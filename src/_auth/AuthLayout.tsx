import { sideImg } from "@/utils";
import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img src={sideImg} alt="logo" className="xl:block w-1/2 object-cover h-screen bg-no-repeat" loading="lazy" />
        </>
      )}
    </>
  )
}

export default AuthLayout