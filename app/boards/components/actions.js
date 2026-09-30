"use server" // pas besoin d'autoriser les CORS

export async function createBoardAction(prevState, formData){

     const title = formData.get("title");

    const res = await fetch("http://localhost:8080/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    console.log("STATUT QUARKUS :", res.status);
    
    if (!res.ok) {
      const errorData = await res.text();
      console.log("ERREUR QUARKUS :", errorData);
      
      return { error: `Erreur ${res.status}: L'API a refusé la création.` };
  }
}