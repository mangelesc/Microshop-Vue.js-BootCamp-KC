import { User } from "@/models/user";

export interface IAuthState {
    authenticating: boolean;
    isAuthenticated: boolean;
    userAuth?: User;
    userToken?: string;
}

function state(): IAuthState {
    return {
        authenticating: false,
        isAuthenticated: false,
    };
}
export default state;
