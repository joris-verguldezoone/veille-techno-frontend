"use server" // pas besoin d'autoriser les CORS

import { cookies } from "next/headers";

export async function createBoardAction(prevState, formData){
    const title = formData.get("title");

    // a copier dans toutes les requetes du board et boardColumn ou refacto
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
        return { error: "Vous devez être connecté pour créer un tableau." };
    }

    const res = await fetch("http://localhost:8080/api/boards", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // ffs
        },
        body: JSON.stringify({ title }),
    });

    console.log("STATUT QUARKUS :", res.status);
    
    if (!res.ok) {
        const errorData = await res.text();
        console.log("ERREUR QUARKUS :", errorData);
        return { error: `Erreur ${res.status}: L'API a refusé la création.` };
    }

    return { success: true };
}