import type { RequestHandler } from "@sveltejs/kit";
import { serialize } from "cookie";

export const POST: RequestHandler = async ({ request, url }) => {
    const formdata = await request.formData();
    const username = formdata.get('username');
    const password = formdata.get('password');

    if (!username || !password) {
        return {
            status: 400, body: { error: 'username and password required' }
        }
    }

    if (username !== 'demousername' && password !== 'demopassword') {
        return {
            status: 400, body: { error: 'invalid username or password' }
        }
    }

    const generateCookie = serialize('access_token', 'ourusercookie', {
        path: '/',
        maxAge: (new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
        secure: true
    })

    const nextPage = url.searchParams.get('next')
    return {
        status: 302,
        headers: {
            location: nextPage ? nextPage : '/dashboard',
            'Set-Cookie': generateCookie
        }
    }

}