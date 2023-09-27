import { User } from "./user.model";

export interface Ad {
    id: string;
    title: string;
    description: string;
    image: string;
    owner: User;
    ownerId: string;
    category: string
}