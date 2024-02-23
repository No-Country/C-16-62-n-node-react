import Logo from "../../assets/logo.svg"


function Navbar() {
  return (
    <>
      <nav class="bg-[#1995AD] border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img  src={Logo} class="w-[150px]" />
          </a>
          <div
            class=" flex flex-row-reversew-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul class="font-medium flex">
              <li>
                <a
                  href="/login"
                  class="block py-2 px-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:underline"
                  aria-current="page"
                >
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  class="block py-2 px-3 text-white rounded hover:underline md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Registarse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
