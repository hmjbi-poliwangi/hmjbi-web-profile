import { Division, DivisionList } from "@/types/division";
import { Event } from "@/types/event";
import { ProkerIndikator, ProkerItem } from "@/types/proker";

export interface ProkerData {
    dataProker: ProkerItem[];
    dataIndikator: ProkerIndikator[];
}

export interface DataCollectionMap {
    division: Division[];
    events: Event[];
    "divisions-list": DivisionList[];
    proker: ProkerData;
}

export type DataCollection = keyof DataCollectionMap;
