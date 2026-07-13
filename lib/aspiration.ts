import { z } from "zod";

export const aspirationSchema = z.object({
    name: z
        .string()
        .max(50, "Nama maksimal 50 karakter")
        .optional()
        .transform((val) => (val?.trim() ? val.trim() : undefined)),
    aspiration: z
        .string()
        .min(1, "Aspirasi tidak boleh kosong")
        .max(300, "Aspirasi maksimal 300 karakter"),
});

export type AspirationInput = z.infer<typeof aspirationSchema>;

export interface AspirationResponse {
    success: boolean;
    message: string;
}

export async function submitAspiration(data: AspirationInput): Promise<AspirationResponse> {
    const res = await fetch("/api/aspirations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.message || "Gagal mengirim aspirasi");
    }

    return json;
}

export const SUBMISSION_COOLDOWN = 60_000;

export function getLastSubmissionTime(): number | null {
    const stored = localStorage.getItem("lastAspirationSubmit");
    return stored ? Number(stored) : null;
}

export function setLastSubmissionTime(): void {
    localStorage.setItem("lastAspirationSubmit", String(Date.now()));
}

export function getRemainingCooldown(): number {
    const last = getLastSubmissionTime();
    if (!last) return 0;
    const elapsed = Date.now() - last;
    return Math.max(0, SUBMISSION_COOLDOWN - elapsed);
}
