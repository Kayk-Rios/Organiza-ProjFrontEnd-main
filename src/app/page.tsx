"use client";

import React, { useState } from "react";
import Image from "next/image";
import Login from "./login/page";
import Cadastro from "./cadastro/page";

export default function Page() {
  const [isLoginPage, setIsLoginPage] = useState(true); // Estado para alternar entre Login e Cadastro

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo centralizada */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-36 h-36 relative"> {/* Ajusta o tamanho da logo */}
          <Image
            src="/assets/LOGOsemfundo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="font-poppins text-gray-800">
          Simplifica: Organiza
        </span>
      </div>

      {/* Card de Login ou Cadastro */}
      <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-gradient-to-b from-green-100 to-green-500">
        {isLoginPage ? (
          // Formulário de Login
          <Login/>
        ) : (
          // Formulário de Cadastro (Não alterado)
         <Cadastro/>
        )}

        <p className="mt-4 text-center text-sm text-gray-800">
          {isLoginPage ? (
            <>
              Não possui cadastro?{" "}
              <span
                onClick={() => setIsLoginPage(false)}
                className="text-green-700 font-semibold hover:underline cursor-pointer"
              >
                Inscreva-se gratuitamente
              </span>
            </>
          ) : (
            <>
              Já possui conta?{" "}
              <span
                onClick={() => setIsLoginPage(true)}
                className="text-green-700 font-semibold hover:underline cursor-pointer"
              >
                Faça login
              </span>
            </>
          )}
        </p>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-0 left-0 right-0 w-full bg-gray-100 py-4">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Sobre nós
          </a>
          <a href="#" className="hover:underline">
            Política de privacidade
          </a>
          <a href="#" className="hover:underline">
            Termos de uso
          </a>
          <a href="#" className="hover:underline">
            Fale conosco
          </a>
        </div>
      </footer>
    </div>
  );
}
