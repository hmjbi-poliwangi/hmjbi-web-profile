import { dataDivisions } from "@/data/division";
import { dataEvents } from "@/data/events";
import { dataDivisions as divisionList } from "@/data/divisions-list";
import { dataProker, dataIndikator } from "@/data/proker";
import { DataCollection, DataCollectionMap } from "@/types/data";

const collections: DataCollectionMap = {
    division: dataDivisions,
    events: dataEvents,
    "divisions-list": divisionList,
    proker: { dataProker, dataIndikator },
};

/** Provides the public site with local, read-only data. */
export function useData<K extends DataCollection>(
    collection: K,
    initialData: DataCollectionMap[K]
): { data: DataCollectionMap[K]; loading: false; error: null } {
    return {
        data: (collections[collection] ?? initialData) as DataCollectionMap[K],
        loading: false,
        error: null,
    };
}
