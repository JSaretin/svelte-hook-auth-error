import type { RequestHandler } from "@sveltejs/kit";
import { serialize } from "cookie";

export const GET: RequestHandler = async () => {
    return {
        status: 302,
        headers: {
            location: "/",
            "Set-Cookie": serialize('access_token', "", {
                path: "/",
                maxAge: 0
            })
        }
    }
}