import { Category } from "./category.model";
import { User } from "./user.model";

export interface Ad {
    _id?: string;
    title: string;
    description: string;
    image: string;
    price: number;
    user?: User;
    category?: Category
}