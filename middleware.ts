import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define the public routes that should be accessible without authentication
const isPublicRoute = createRouteMatcher([
	'/sign-in(.*)',
	'/sign-up(.*)',
	'/',
	'/api/webhook',
	'/question/:id',
	'/tags',
	'/tags/:id',
	'/profile/:id',
	'/community',
	'/jobs',
])

// Define the routes that should be ignored for authentication
const isIgnoredRoute = createRouteMatcher(['/api/webhook', '/api/chatgpt']) // Add your ignored routes here

export default clerkMiddleware((auth, request) => {
	if (isIgnoredRoute(request)) {
		// Skip authentication for ignored routes
		return
	}

	if (!isPublicRoute(request)) {
		// Protect all other routes that are not public
		auth().protect()
	}
})

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
}
