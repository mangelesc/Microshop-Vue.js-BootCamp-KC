import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IAuthState } from "./state";

const mutations: MutationTree<IAuthState> = {
    setAuthenticating(state: IAuthState, newValue: boolean) {
        state.authenticating = newValue;
    },
    setisAuthenticating(state: IAuthState, newValue: boolean) {
        state.isAuthenticated = newValue;
    },
    setuserAuth(state: IAuthState, newValue: User) {
        state.userAuth = newValue;
    },
    setLogOut(state: IAuthState, newValue: boolean) {
        state.isAuthenticated = false;
        localStorage.removeItem("token");
    },
};

export default mutations;
