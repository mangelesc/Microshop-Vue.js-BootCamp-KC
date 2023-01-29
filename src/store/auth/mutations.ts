import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IAuthState } from "./state";
import router from "@/router";

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
    setLogOut(state: IAuthState) {
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        localStorage.removeItem("nameUser");
        state.isAuthenticated = false;
        state.userAuth = null;
        state.userToken = null;
        router.push("/login");
    },
};

export default mutations;
