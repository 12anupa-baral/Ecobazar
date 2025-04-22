import { Link } from "react-router-dom"
import { useAppSelector } from "../../store/hooks"
import { useEffect, useState } from "react"


function Navbar(){
    const reduxToken = useAppSelector((store)=>store.auth.user.token)
    const localStorageToken = localStorage.getItem("tokenHoYo")
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
      setIsLoggedIn(!!localStorageToken || !!reduxToken);
      // if(reduxToken && localStorageToken){
      //     setIsLoggedIn(true)
      // }
    }, []);

    return (
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="navbar">
          <div className="flex mt-4 sm:mt-0">
            <Link className=" navItems " to="/">
              Home
            </Link>
            <Link className=" navItems" to="/products">
              Products
            </Link>
            <Link className=" navItems" to="/cart">
              Cart
            </Link>
            <Link className=" navItems" to="/about">
              About Us
            </Link>
            <Link className=" navItems" to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="hidden md:block">
            {isLoggedIn ? (
              <Link to="/logout">
                <button
                  type="button"
                  className="mr-5 py-3 px-8 text-sm bg-primary hover:bg-hardPrimary rounded text-white "
                >
                  Logout
                </button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <button
                    type="button"
                    className="mr-5 py-3 px-8 text-sm bg-primary hover:bg-hardPrimary rounded text-white "
                  >
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    type="button"
                    className=" py-3 px-8 text-sm bg-primary hover:bg-hardPrimary rounded text-white "
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    );
}

export default Navbar