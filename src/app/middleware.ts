import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const path = request.nextUrl.pathname;

  // Rotas protegidas
  const protectedRoutes = ["/"];
  const isProtected = protectedRoutes.some((route) => path.startsWith(route));

  // Redirecionar não autenticados
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirecionar autenticados longe do login
  if (path === "/login" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
