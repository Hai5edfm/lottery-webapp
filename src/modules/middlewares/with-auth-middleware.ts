import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server"

import { APP_ADMIN_PATH, APP_LOGIN_PATH } from "@/modules/config/app.routes"
import { API_URL, API_VALIDATE_AUTH_PATH } from "@/modules/config/services.routes"
import { type MiddlewareFactory } from "@/modules/middlewares/types"

export const withAuth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const currentPath = request.nextUrl.pathname
    console.log("currentPath", currentPath)
    const isProtectedPath = currentPath.startsWith(APP_ADMIN_PATH)

    // NO PROTECTED PATH
    if (!isProtectedPath) return next(request, event)

    // VALIDATE AUTH COOKIE FORMAT
    const authCookie = request.cookies.get("auth")
    const cookiesString = request.headers.get("Cookie") ?? ""

    if (!authCookie) {
      return NextResponse.redirect(new URL(APP_LOGIN_PATH, request.url))
    }

    // VALIDATE AUTH COOKIE WITH SERVER
    try {
      const headers = new Headers()

      headers.append("Cookie", cookiesString)

      const response = await fetch(`${API_URL}${API_VALIDATE_AUTH_PATH}`, {
        method: "GET",
        credentials: "include",
        headers,
      })

      const data = await response.json()

      if (data.authenticated !== true) {
        return NextResponse.redirect(new URL(APP_LOGIN_PATH, request.url))
      }
    } catch (error) {
      // TODO: LOG ERROR in somewhere
      return NextResponse.redirect(new URL(APP_LOGIN_PATH, request.url))
    }

    // IS A AUTHENTICATED USER
    return next(request, event)
  }
}
