import "./App.css";
function App() {
  return (
    <>
    <div>
    <nav className=" bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 logo">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../../favicon.ico" className="h-9" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Qué Servicio?</span>
            </a>
            
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="" alt="user photo"/>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    <a href="tel:1141761096" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  {/* routerLink="/login" */}
                    <a  className="text-m  text-blue-600 dark:text-blue-500 hover:underline">Iniciar Seccion</a>
                </div>
                
            </div>
        </div>
    </nav>

    </div>
      <h1 className="text-3xl font-bold underline">APP ROOT</h1>

     
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </form>
    </>
  );
}

export default App;
