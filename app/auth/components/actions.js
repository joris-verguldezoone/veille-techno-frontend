"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      return { error: "Email ou mot de passe incorrect." };
    }

    const data = await res.json();
    const token = data.accessToken; 

    const cookieStore = await cookies(); 
    cookieStore.set("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // Expire dans 1 jour
    });

  } catch (error) {
    return { error: "Impossible de joindre le serveur Quarkus." };
  }

  redirect("/boards");
}

export async function registerAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");


  try {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) { // a revoir
      return { error: "Email ou mot de passe incorrect." };
    }

     const data = await res.json();

     console.log(data, "result")

     return { success: true };

  } catch (error) {
    return { error: "Impossible de joindre le serveur Quarkus." };
  }

}

