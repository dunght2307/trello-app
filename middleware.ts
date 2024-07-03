import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
    '/select-org(.*)',
    '/organization(.*)',
]);

export default clerkMiddleware((auth, req) => {
    const { userId, orgId, redirectToSignIn } = auth();
    if (userId && !isProtectedRoute(req)) {
        let path = '/select-org';
        // if (orgId) {
        //     path = `/organization/${orgId}`;
        // }
        const orgSelection = new URL(path, req.url);
        return NextResponse.redirect(orgSelection);
    }
    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn();
    }
    // if (userId && !orgId && !isProtectedRoute(req)) {
    //     const orgSelection = new URL('/select-org/', req.url);
    //     return NextResponse.redirect(orgSelection);
    // }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
