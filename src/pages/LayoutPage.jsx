import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/Navigation";


const Layout = () => {
  return (
    <>
    <Navigation/>

      <Outlet />
    </>
  )
};

export default Layout;