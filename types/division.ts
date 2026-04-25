export interface DivisionList {
    name: string;
    imageUrl?: string;
}

export interface Division {
    name: string;
    imageUrl?: string;
    imageCoordinator?: string;
    description?: string;
    members?: {
        name: string;
        imageMember: string;
    }[];
}
