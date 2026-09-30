"use client"

import { loginAction } from "./actions";
import { useActionState } from "react";

export default function LoginForm() {
  
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="flex flex-col space-y-4">
      
      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="email" required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Mot de passe</label>
        <input type="password" name="password" required className="w-full border p-2 rounded" />
      </div>
      
      <button 
        type="submit" 
        disabled={isPending}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        {isPending ? "Chargement..." : "Se connecter"}
      </button>
    </form>
  );
}