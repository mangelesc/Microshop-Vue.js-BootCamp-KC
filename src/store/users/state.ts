import { User } from "@/models/user";

export interface IUsersState {
    isLoading: boolean;
    selectedUser: User | null;
}

function state(): IUsersState {
    return {
        isLoading: false,
        selectedUser: null,
    };
}
export default state;
