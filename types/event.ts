export interface Event {
    id: number;
    date: Date;
    title: string;
    description: string;
    image?: string;
    location?: string;
    status: "COMING SOON" | "IN PROGRESS" | "CANCLE" | "FINISHED";
}
