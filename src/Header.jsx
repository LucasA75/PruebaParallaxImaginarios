import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
       <Link to="/home">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
     <Outlet/>
    </>
   
  )
};
export default Header;