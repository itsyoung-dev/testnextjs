import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    debug: true,
    publicRoutes: [
        // pages
        "/",
        "/earn-with-us(.*)",
        "/courses(.*)",
        "/affiliate-program(.*)",
        // auth
        "/login(.*)",
        "/signup(.*)",
        "/reset-password(.*)",
        // api
        "/api/webhook/clerk",
    ],
    ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
