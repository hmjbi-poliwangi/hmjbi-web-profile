import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { DataCollection, DataCollectionMap } from "@/types/data";

const memberSchema = z
    .object({
        name: z.string(),
        imageMember: z.string(),
        role: z.string().optional(),
    })
    .passthrough();

const divisionSchema = z
    .object({
        name: z.string().min(1),
        slug: z.string().optional(),
        imageUrl: z.string().optional(),
        role: z.string().optional(),
        coordinator: z.object({ name: z.string(), image: z.string() }).passthrough().optional(),
        description: z.string().optional(),
        members: z.array(memberSchema).optional(),
        biro: z
            .array(
                z
                    .object({
                        name: z.string(),
                        tugas: z.string(),
                        members: z.array(memberSchema),
                    })
                    .passthrough()
            )
            .optional(),
    })
    .passthrough();

const phaseSchema = z
    .object({
        name: z.string(),
        startMonth: z.number(),
        endMonth: z.number(),
    })
    .passthrough();

const prokerSchema = z
    .object({
        id: z.number().int(),
        name: z.string().min(1),
        description: z.string(),
        tempat: z.string(),
        tanggal: z.string(),
        divisionSlug: z.string().optional(),
        image: z.string().optional(),
        status: z.string().optional(),
        phases: z.array(phaseSchema),
        schedule: z
            .array(
                z
                    .object({
                        day: z.string(),
                        title: z.string(),
                        time: z.string(),
                        description: z.string(),
                    })
                    .passthrough()
            )
            .optional(),
        registration: z
            .object({
                link: z.string().optional(),
                quota: z.number().optional(),
                registered: z.number().optional(),
                deadline: z.string().optional(),
                openDate: z.string().optional(),
                fee: z.string().optional(),
            })
            .passthrough()
            .optional(),
        contacts: z
            .array(
                z
                    .object({
                        name: z.string(),
                        phone: z.string(),
                        instagram: z.string().optional(),
                    })
                    .passthrough()
            )
            .optional(),
    })
    .passthrough();

const collectionSchemas = {
    division: z.array(divisionSchema),
    events: z.array(
        z
            .object({
                id: z.number().int(),
                date: z.string().min(1),
                endDate: z.string().optional(),
                title: z.string().min(1),
                description: z.string(),
                image: z.string().optional(),
                location: z.string().optional(),
                status: z.enum(["COMING SOON", "IN PROGRESS", "CANCELLED", "FINISHED"]),
                registrationDate: z.string().optional(),
            })
            .passthrough()
    ),
    "divisions-list": z.array(
        z
            .object({
                name: z.string().min(1),
                imageUrl: z.string().optional(),
            })
            .passthrough()
    ),
    proker: z
        .object({
            dataProker: z.array(prokerSchema),
            dataIndikator: z.array(
                z
                    .object({
                        prokerName: z.string(),
                        items: z.array(
                            z
                                .object({
                                    no: z.number(),
                                    indikator: z.string(),
                                    penjelasan: z.string(),
                                })
                                .passthrough()
                        ),
                    })
                    .passthrough()
            ),
        })
        .passthrough(),
} satisfies Record<DataCollection, z.ZodType>;

function getCollectionPath(collection: DataCollection) {
    const dataDirectory = process.env.HMJBI_DATA_DIR || path.join(process.cwd(), "data");
    return path.join(dataDirectory, `${collection}.json`);
}

async function ensureCollectionFile(collection: DataCollection) {
    const filePath = getCollectionPath(collection);
    try {
        await readFile(filePath);
        return filePath;
    } catch (error) {
        if (!(error instanceof Error) || !("code" in error) || error.code !== "ENOENT") {
            throw error;
        }
    }

    const sourcePath = path.join(process.cwd(), "data-seed", `${collection}.json`);
    const fallbackPath = path.join(process.cwd(), "data", `${collection}.json`);
    let seed: string;
    try {
        seed = await readFile(sourcePath, "utf8");
    } catch (error) {
        if (!(error instanceof Error) || !("code" in error) || error.code !== "ENOENT") {
            throw error;
        }
        seed = await readFile(fallbackPath, "utf8");
    }

    await mkdir(path.dirname(filePath), { recursive: true });
    try {
        await writeFile(filePath, seed, { encoding: "utf8", flag: "wx" });
    } catch (error) {
        if (!(error instanceof Error) || !("code" in error) || error.code !== "EEXIST") {
            throw error;
        }
    }
    return filePath;
}

export function readCollection<K extends DataCollection>(
    collection: K
): Promise<DataCollectionMap[K]>;
export async function readCollection(
    collection: DataCollection
): Promise<DataCollectionMap[DataCollection]> {
    const contents = await readFile(await ensureCollectionFile(collection), "utf8");
    const parsedJson: unknown = JSON.parse(contents);
    switch (collection) {
        case "division":
            return collectionSchemas.division.parse(parsedJson);
        case "events":
            return collectionSchemas.events.parse(parsedJson);
        case "divisions-list":
            return collectionSchemas["divisions-list"].parse(parsedJson);
        case "proker":
            return collectionSchemas.proker.parse(parsedJson);
    }
}

export function safeParseCollection<K extends DataCollection>(collection: K, value: unknown) {
    return collectionSchemas[collection].safeParse(value);
}

export async function writeCollection(collection: DataCollection, value: unknown) {
    const filePath = await ensureCollectionFile(collection);
    const tempPath = `${filePath}.${randomUUID()}.tmp`;
    const contents = `${JSON.stringify(value, null, 4)}\n`;

    await writeFile(tempPath, contents, { encoding: "utf8", flag: "wx" });
    try {
        await rename(tempPath, filePath);
    } catch (error) {
        try {
            await unlink(tempPath);
        } catch (cleanupError) {
            console.error(`Gagal membersihkan berkas sementara "${tempPath}":`, cleanupError);
        }
        throw error;
    }
}
