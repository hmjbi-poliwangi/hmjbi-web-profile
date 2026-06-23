export interface DivisionList {
    name: string;
    imageUrl?: string;
}

export interface Division {
    name: string;
    imageUrl?: string;
    role?: string;
    coordinator?: {
        name: string;
        image: string;
    };
    description?: string;
    members?: {
        name: string;
        imageMember: string;
        role?: string;
    }[];
    biro?: {
        name: string;
        members: {
            name: string;
            imageMember: string;
            role?: string;
        }[];
    }[];
}
