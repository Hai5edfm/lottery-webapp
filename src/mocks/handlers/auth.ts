import { http, HttpResponse } from "msw"

export const authHandlers = [
  http.post("http://localhost:3000/api/login", async () => {
    return HttpResponse.json({
      message: "Login successful",
    })
  }),
]
