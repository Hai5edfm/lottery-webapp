import { chainMiddlewares } from "@/modules/middlewares/chain-middlewares"
import { withAuth } from "@/modules/middlewares/with-auth-middleware"

export const config = {
  matcher: ["/dashboard(/.*)?"],
}

export default chainMiddlewares([withAuth])
