import { User } from "@/models/user";

export interface IAuthState {
    authenticating: boolean;
    isAuthenticated: boolean;
    userAuth: User | null;
    userToken: string | null;
}

function state(): IAuthState {
    return {
        authenticating: false,
        isAuthenticated: false,
        userAuth: null,
        userToken: null,
    };
}
export default state;
