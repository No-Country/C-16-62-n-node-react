import Logo from "../../assets/logo.svg";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar
        className="bg-[#1995AD] border-gray-200 dark:bg-gray-900"
        fluid
        rounded
      >
        <Navbar.Brand href="/">
          <img src={Logo} className="mr-3 h-16 sm:h-9 " alt="Contratame Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link
           to="/login"
           className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            aria-current="page"
          >
            Iniciar Sesión
          </Link>

          <Link to="/register" className="text-white bg-[#1995AD] hover:bg-[#2aa0b8] hover:underline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Registrar</Link>
          {/* <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div> */}
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
