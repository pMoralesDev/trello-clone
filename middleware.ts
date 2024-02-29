import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/', '/select.org'],
  afterAuth(auth, req) {
    console.log(`Esto es el auth ${auth.userId}`)
    console.log(`Esto es el auth ${auth.isPublicRoute}`)
    
    if(auth.userId && auth.isPublicRoute) {
      let path = '/select-org'
      console.log(`Esto es el req: ${req.url}`)
      if (auth.orgId){
        path = `/organization/${auth.orgId}`
      }
      const orgSelection = new URL (path, req.url)
      return NextResponse.redirect(orgSelection)
    }
    // if (!auth.userId && !auth.isPublicRoute) {
    //   return redirectToSignIn({returnBackUrl: req.url})
    // }
    // if (auth.userId && !auth.isPublicRoute && req.nextUrl.pathname !== '/select-org'){
    //   const orgSelection = new URL ('/select-org', req.url)
    //   return NextResponse.redirect(orgSelection)
    // }
  }
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};