export interface ProkerPhase {
    name: string;
    startMonth: number;
    endMonth: number;
}

export interface DailySchedule {
    day: string;
    title: string;
    time: string;
    description: string;
}

export interface Registration {
    link?: string;
    quota?: number;
    registered?: number;
    deadline?: string;
    openDate?: string;
    fee?: string;
}

export interface Contact {
    name: string;
    phone: string;
    instagram?: string;
}

export interface ProkerItem {
    id: number;
    name: string;
    description: string;
    tempat: string;
    tanggal: string;
    divisionSlug?: string;
    image?: string;
    status?: string;
    phases: ProkerPhase[];
    schedule?: DailySchedule[];
    registration?: Registration;
    contacts?: Contact[];
}

export interface IndikatorItem {
    no: number;
    indikator: string;
    penjelasan: string;
}

export interface ProkerIndikator {
    prokerName: string;
    items: IndikatorItem[];
}
