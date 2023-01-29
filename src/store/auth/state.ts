import { User } from "@/models/user";

export interface IAuthState {
    authenticating: boolean;
    isAuthenticated: boolean;
    userAuth: User;
}

function state(): IAuthState {
    return {
        authenticating: false,
        isAuthenticated: false,
        userAuth: { id: -1 },
    };
}
export default state;
