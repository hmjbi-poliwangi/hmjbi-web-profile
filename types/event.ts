export interface Event {
    id: number;
    date: Date | string;
    endDate?: Date | string;
    title: string;
    description: string;
    image?: string;
    location?: string;
    status: "COMING SOON" | "IN PROGRESS" | "CANCELLED" | "FINISHED";
    registrationDate?: Date | string;
}
