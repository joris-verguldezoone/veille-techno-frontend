"use client"

import { useActionState } from "react";
import { registerAction } from "./actions";
import { useEffect } from "react";

export default function RegisterForm({onSuccess}) {

    const [state, formAction, isPending] = useActionState(registerAction, false)

    useEffect(() => { // pour basculer de composant si l'inscription réussie
      if (state?.success) {
        onSuccess(); 
      }
    }, [state, onSuccess]);

  return (
    <form action={formAction} className="flex flex-col space-y-4">
      
      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p> 
      )}
            
      <div>
        <label className="block text-sm font-medium mb-1">Nom</label>
        <input type="text" name="name" required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="email" required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Mot de passe</label>
        <input type="password" name="password" required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
        S'inscrire
      {isPending ? "Chargement..." : "Se connecter"}
      </button>
    </form>

  );
}