import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IAuthState } from "./state";

const mutations: MutationTree<IAuthState> = {
    setAuthenticating(state: IAuthState, newValue: boolean) {
        state.authenticating = newValue;
    },
    setisisAuthenticated(state: IAuthState, newValue: boolean) {
        state.isAuthenticated = newValue;
    },
    setuserAuth(state: IAuthState, newValue: User) {
        state.userAuth = newValue;
    },
    setUserToken(state: IAuthState, newValue: string) {
        state.userToken = newValue;
    },
    setLogOut(state: IAuthState, newValue: boolean) {
        state.isAuthenticated = false;
        localStorage.removeItem("token");
    },
};

export default mutations;
