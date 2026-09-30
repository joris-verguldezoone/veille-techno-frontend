"use client";

import { useState } from "react";
import  LoginForm  from "./components/LoginForm"
import  RegisterForm  from "./components/RegisterForm"

export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Connexion au Kanban" : "Créer un compte"}
        </h2>

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm onSuccess={() => setIsLogin(true)} />
        )}

        {/* Le bouton de permutation */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline font-semibold mt-2"
          >
            {isLogin ? "S'inscrire ici" : "Se connecter ici"}
          </button>
        </div>

      </div>
    </div>
  );
}



