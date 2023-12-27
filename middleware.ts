import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/earn-with-us(.*)",
        "/courses(.*)",
        "/affiliate-program(.*)",
        "/onboarding(.*)",
        "/api/webhook/clerk",
    ],
    ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
