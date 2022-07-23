import type { GetSession, Handle } from "@sveltejs/kit";
import { parse } from "cookie"

export const handle: Handle = async ({ event, resolve }) => {
    const path = event.url.pathname;
    const accessToken = parse(event.request.headers.get('cookie') || "")?.access_token;

    event.locals.access_token = accessToken;

    if (path.startsWith('/dashboard') && !accessToken) {
        return new Response(null, {
            status: 302,
            headers: {
                location: "/login?next=" + path
            }
        })
    }

    if ((path.startsWith('/login') || path.startsWith('/register')) && accessToken) {
        return new Response(null, {
            status: 302,
            headers: {
                location: "/dashboard"
            }
        })
    }

    return await resolve(event)
}


export const getSession: GetSession = ({ locals }) => {
    return {
        logged_id: locals.access_token !== undefined
    }
}