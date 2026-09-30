// middleware.js
import { NextResponse } from 'next/server';

console.log("coucou")

export function middleware(request) {
  const token = request.cookies.get('jwt')?.value;

  if (!token) {
    // Si c'est pas bon on renvoie l'utilisateur sur l'auth
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Si le token existe, on pourra continuer la navigation sur les pages si dessous, 
  return NextResponse.next();
}

export const config = {
  // Liste des routes protégées
  matcher: [
    '/boards/:path*', 
  ],
};