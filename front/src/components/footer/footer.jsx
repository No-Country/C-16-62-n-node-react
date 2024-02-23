import React from 'react'
import Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <footer class="bg-[#1995AD] text-white shadow dark:bg-gray-900 mt-[30vh]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} class="h-20" />
            </a>
            <ul class="flex items-center mb-6 text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Sobre nosotros</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Terminos y condiciones</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Preguntas frecuentes</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contactanos</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center">© 2023 <a href="#" class="hover:underline">Contratame</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer