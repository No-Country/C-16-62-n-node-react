function Navbar() {
    return (
      <>

    <nav class=" bg-white border-gray-200 dark:bg-gray-900 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 logo">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../../favicon.ico" class="h-9" alt="Departamentos MarDelPlata Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Contratame</span>
            </a>
            
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="" alt="user photo"/>
                </button>
                {/* Dropdown menu - */}
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    <a href="tel:1141761096" class="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
                <div class="flex items-center space-x-6 rtl:space-x-reverse">
                    <a class="text-m  text-blue-600 dark:text-blue-500 hover:underline">Iniciar Seccion</a>
                </div>
                
            </div>
        </div>
    </nav>
   
      </>
    );
  }
  
  export default Navbar;
  