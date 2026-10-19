import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "hmjbi_admin_session";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const SESSION_SECRET =
    process.env.ADMIN_SESSION_SECRET || "hmjbi-admin-session-secret-change-before-production";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function safeEqual(left: string, right: string) {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);
    return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

function sign(timestamp: string) {
    return createHmac("sha256", SESSION_SECRET).update(timestamp).digest("hex");
}

export function verifyAdminCredentials(username: unknown, password: unknown) {
    return (
        typeof username === "string" &&
        typeof password === "string" &&
        safeEqual(username, ADMIN_USERNAME) &&
        safeEqual(password, ADMIN_PASSWORD)
    );
}

export function createAdminSessionToken() {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    return `${timestamp}.${sign(timestamp)}`;
}

export function isValidAdminSessionToken(token: string | undefined) {
    if (!token) return false;
    const [timestamp, signature, ...rest] = token.split(".");
    if (!timestamp || !signature || rest.length > 0 || !/^\d+$/.test(timestamp)) return false;

    const issuedAt = Number(timestamp);
    const now = Math.floor(Date.now() / 1000);
    if (
        !Number.isSafeInteger(issuedAt) ||
        issuedAt > now ||
        now - issuedAt > SESSION_MAX_AGE_SECONDS
    ) {
        return false;
    }

    return safeEqual(signature, sign(timestamp));
}

export async function hasAdminSession() {
    const cookieStore = await cookies();
    return isValidAdminSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}

export const adminSessionMaxAge = SESSION_MAX_AGE_SECONDS;
