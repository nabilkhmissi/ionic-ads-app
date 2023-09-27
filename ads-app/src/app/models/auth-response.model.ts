import { User } from "./user.model";

export interface AuthResponse {
    data: User,
    status: number
}