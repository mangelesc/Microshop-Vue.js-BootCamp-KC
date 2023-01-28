import { Auth } from "@/models/auth";

export interface IAuthState {
    authenticating: boolean;
    userAuth: Auth | null;
    idToken: string | null;
}

function state(): IAuthState {
    return {
        authenticating: false,
        userAuth: null,
        idToken: null,
    };
}
export default state;
