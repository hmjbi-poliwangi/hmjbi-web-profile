"use client";

import { ReactNode } from "react";
import { Trash2 } from "lucide-react";
import { DataCollection } from "@/types/data";

type JsonPath = (string | number)[];
type JsonObject = Record<string, unknown>;

function isObject(value: unknown): value is JsonObject {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function nextRecordId(value: unknown[]) {
    const ids = value.flatMap((item) =>
        isObject(item) && typeof item.id === "number" ? [item.id] : []
    );
    return Math.max(0, ...ids) + 1;
}

function nextIndicatorNumber(value: unknown[]) {
    const numbers = value.flatMap((item) =>
        isObject(item) && typeof item.no === "number" ? [item.no] : []
    );
    return Math.max(0, ...numbers) + 1;
}

function defaultArrayItem(collection: DataCollection, path: JsonPath, current: unknown[]) {
    const key = path[path.length - 1] ?? collection;
    if (key === "division") {
        return { name: "", slug: "", imageUrl: "", description: "", members: [] };
    }
    if (key === "events") {
        return {
            id: nextRecordId(current),
            date: new Date().toISOString(),
            title: "",
            description: "",
            status: "COMING SOON",
        };
    }
    if (key === "divisions-list") return { name: "", imageUrl: "" };
    if (key === "dataProker") {
        return {
            id: nextRecordId(current),
            name: "",
            description: "",
            tempat: "",
            tanggal: "",
            divisionSlug: "",
            phases: [],
        };
    }
    if (key === "dataIndikator") return { prokerName: "", items: [] };
    if (key === "members") return { name: "", imageMember: "", role: "Staff" };
    if (key === "biro") return { name: "", tugas: "", members: [] };
    if (key === "phases") return { name: "Persiapan", startMonth: 1, endMonth: 1 };
    if (key === "schedule") return { day: "", title: "", time: "", description: "" };
    if (key === "contacts") return { name: "", phone: "", instagram: "" };
    if (key === "items") {
        return { no: nextIndicatorNumber(current), indikator: "", penjelasan: "" };
    }
    return collection === "events" ? { id: nextRecordId(current) } : {};
}

function optionalFields(collection: DataCollection, path: JsonPath) {
    if (collection === "division") {
        if (path.length === 1) {
            return {
                slug: "",
                imageUrl: "",
                role: "",
                coordinator: { name: "", image: "" },
                description: "",
                members: [],
                biro: [],
            };
        }
        if (path.includes("members") && path[path.length - 1] !== "members") {
            return { role: "" };
        }
    }
    if (collection === "events" && path.length === 1) {
        return { endDate: "", image: "", location: "", registrationDate: "" };
    }
    if (collection === "proker" && path.includes("dataProker") && path.length === 2) {
        return {
            divisionSlug: "",
            image: "",
            status: "",
            schedule: [],
            registration: {},
            contacts: [],
        };
    }
    if (collection === "proker" && path[path.length - 1] === "registration") {
        return {
            link: "",
            quota: 0,
            registered: 0,
            deadline: "",
            openDate: "",
            fee: "",
        };
    }
    if (
        collection === "proker" &&
        path.includes("contacts") &&
        path[path.length - 1] !== "contacts"
    ) {
        return { instagram: "" };
    }
    return {};
}

function fieldDefault(collection: DataCollection, path: JsonPath, key: string): unknown {
    if (
        key === "members" ||
        key === "biro" ||
        key === "phases" ||
        key === "schedule" ||
        key === "contacts" ||
        key === "items"
    )
        return [];
    if (key === "coordinator") return { name: "", image: "" };
    if (key === "registration") return {};
    if (key === "status" && collection === "events") return "COMING SOON";
    if (key === "quota" || key === "registered" || key === "startMonth" || key === "endMonth") {
        return 0;
    }
    if (key === "no") return 1;
    return "";
}

function displayLabel(path: JsonPath, fallback: string) {
    const value = path[path.length - 1];
    return typeof value === "string" ? value : fallback;
}

function getAccordionTitle(
    value: unknown,
    index: number,
    label: string,
    divisionOptions: { slug: string; name: string }[]
) {
    if (!isObject(value)) return `${label} ${index + 1}`;

    const title = [value.name, value.title, value.prokerName, value.indikator].find(
        (item) => typeof item === "string" && item.trim()
    );
    const id = typeof value.id === "number" ? `#${value.id}` : null;
    const number = typeof value.no === "number" ? `#${value.no}` : null;
    const division =
        typeof value.divisionSlug === "string"
            ? divisionOptions.find((item) => item.slug === value.divisionSlug)?.name
            : undefined;
    const summary = typeof title === "string" ? title : (id ?? number ?? `${label} ${index + 1}`);

    if (division) return `${summary} · ${division}`;
    if (typeof value.divisionSlug === "string" && !value.divisionSlug) {
        return `${summary} · Belum dihubungkan ke divisi`;
    }
    return summary;
}

function JsonField({
    collection,
    value,
    path,
    label,
    divisionOptions,
    onChange,
}: {
    collection: DataCollection;
    value: unknown;
    path: JsonPath;
    label: string;
    divisionOptions: { slug: string; name: string }[];
    onChange: (value: unknown) => void;
}) {
    if (Array.isArray(value)) {
        return (
            <fieldset className="space-y-3 rounded-xl border border-zinc-700/80 bg-zinc-900/70 p-4">
                <legend className="px-2 font-semibold capitalize text-yellow-300">
                    {displayLabel(path, label)}{" "}
                    <span className="text-xs text-zinc-500">({value.length})</span>
                </legend>
                {value.map((item, index) => (
                    <details
                        key={index}
                        className="group rounded-lg border border-zinc-700 bg-black/20"
                    >
                        <summary className="cursor-pointer list-none rounded-lg px-4 py-3 pr-10 font-semibold text-zinc-100 transition hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                            <span className="mr-2 inline-block text-yellow-400 transition-transform group-open:rotate-90">
                                ▸
                            </span>
                            {getAccordionTitle(item, index, label, divisionOptions)}
                        </summary>
                        <div className="space-y-3 border-t border-zinc-800 p-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:border-red-500/60 hover:bg-red-500/20 hover:text-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                                onClick={() =>
                                    onChange(value.filter((_, itemIndex) => itemIndex !== index))
                                }
                            >
                                <Trash2 aria-hidden="true" className="h-4 w-4" />
                                Hapus item
                            </button>
                            <JsonField
                                collection={collection}
                                value={item}
                                path={[...path, index]}
                                label={`${label} ${index + 1}`}
                                divisionOptions={divisionOptions}
                                onChange={(nextItem) =>
                                    onChange(
                                        value.map((existing, itemIndex) =>
                                            itemIndex === index ? nextItem : existing
                                        )
                                    )
                                }
                            />
                        </div>
                    </details>
                ))}
                <button
                    type="button"
                    className="rounded-lg border border-yellow-400/40 px-3 py-2 text-sm font-semibold text-yellow-300 hover:bg-yellow-400/10"
                    onClick={() => onChange([...value, defaultArrayItem(collection, path, value)])}
                >
                    + Tambah {label}
                </button>
            </fieldset>
        );
    }

    if (isObject(value)) {
        const allowedOptionalFields: Record<string, unknown> = optionalFields(collection, path);
        const missingOptionalFields = Object.keys(allowedOptionalFields).filter(
            (key) => !(key in value)
        );

        return (
            <fieldset className="space-y-3 rounded-xl border border-zinc-700/80 bg-zinc-900/50 p-4">
                <legend className="px-2 font-semibold capitalize text-zinc-200">
                    {displayLabel(path, label)}
                </legend>
                {collection === "proker" &&
                    path.includes("dataProker") &&
                    path.length === 2 &&
                    !("divisionSlug" in value) && (
                        <label className="block max-w-xl space-y-1 text-sm text-zinc-300">
                            <span className="block">Divisi penanggung jawab</span>
                            <select
                                className="w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400"
                                value=""
                                onChange={(event) =>
                                    onChange({ ...value, divisionSlug: event.target.value })
                                }
                            >
                                <option value="">Belum dihubungkan</option>
                                {divisionOptions.map((division) => (
                                    <option key={division.slug} value={division.slug}>
                                        {division.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}
                <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(value).map(([key, fieldValue]) => {
                        const childPath = [...path, key];
                        const fieldLabel = key;
                        const inputClasses =
                            "w-full rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-yellow-400";

                        if (Array.isArray(fieldValue) || isObject(fieldValue)) {
                            return (
                                <div key={key} className="md:col-span-2">
                                    <JsonField
                                        collection={collection}
                                        value={fieldValue}
                                        path={childPath}
                                        label={fieldLabel}
                                        divisionOptions={divisionOptions}
                                        onChange={(nextValue) =>
                                            onChange({ ...value, [key]: nextValue })
                                        }
                                    />
                                </div>
                            );
                        }

                        const longText =
                            key.toLowerCase().includes("description") ||
                            key === "penjelasan" ||
                            key === "tugas";
                        const control: ReactNode =
                            key === "divisionSlug" ? (
                                <select
                                    className={inputClasses}
                                    value={typeof fieldValue === "string" ? fieldValue : ""}
                                    onChange={(event) =>
                                        onChange({ ...value, [key]: event.target.value })
                                    }
                                >
                                    <option value="">Belum dihubungkan</option>
                                    {divisionOptions.map((division) => (
                                        <option key={division.slug} value={division.slug}>
                                            {division.name}
                                        </option>
                                    ))}
                                </select>
                            ) : typeof fieldValue === "number" ? (
                                <input
                                    className={inputClasses}
                                    type="number"
                                    value={fieldValue}
                                    onChange={(event) =>
                                        onChange({
                                            ...value,
                                            [key]:
                                                event.target.value === ""
                                                    ? 0
                                                    : Number(event.target.value),
                                        })
                                    }
                                />
                            ) : longText ? (
                                <textarea
                                    className={`${inputClasses} min-h-24 resize-y`}
                                    value={typeof fieldValue === "string" ? fieldValue : ""}
                                    onChange={(event) =>
                                        onChange({ ...value, [key]: event.target.value })
                                    }
                                />
                            ) : (
                                <input
                                    className={inputClasses}
                                    type="text"
                                    value={typeof fieldValue === "string" ? fieldValue : ""}
                                    onChange={(event) =>
                                        onChange({ ...value, [key]: event.target.value })
                                    }
                                />
                            );

                        return (
                            <label key={key} className="space-y-1 text-sm text-zinc-300">
                                <span className="block capitalize">{fieldLabel}</span>
                                {control}
                            </label>
                        );
                    })}
                </div>
                {missingOptionalFields.length > 0 && (
                    <label className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                        Tambah kolom:
                        <select
                            className="rounded-lg border border-zinc-700 bg-black px-3 py-2 text-sm text-white"
                            value=""
                            onChange={(event) => {
                                const key = event.target.value;
                                if (!key) return;
                                onChange({
                                    ...value,
                                    [key]:
                                        allowedOptionalFields[key] ??
                                        fieldDefault(collection, path, key),
                                });
                            }}
                        >
                            <option value="">Pilih kolom opsional</option>
                            {missingOptionalFields.map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </label>
                )}
            </fieldset>
        );
    }

    return <p className="text-sm text-red-300">Nilai pada {path.join(".")} tidak dapat diedit.</p>;
}

export default function JsonEditor({
    collection,
    value,
    onChange,
    divisionOptions,
}: {
    collection: DataCollection;
    value: unknown;
    onChange: (value: unknown) => void;
    divisionOptions: { slug: string; name: string }[];
}) {
    return (
        <JsonField
            collection={collection}
            value={value}
            path={[]}
            label={collection}
            divisionOptions={divisionOptions}
            onChange={onChange}
        />
    );
}
