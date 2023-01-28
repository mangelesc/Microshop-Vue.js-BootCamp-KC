import { User } from "@/models/user";

export interface IUsersState {
    isLoading: boolean;
    loggedUser: User | null;
}

function state(): IUsersState {
    return {
        isLoading: false,
        loggedUser: null,
    };
}
export default state;
