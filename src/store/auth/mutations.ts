import { Auth } from "@/models/auth";
import { MutationTree } from "vuex";
import { IAuthState } from "./state";

const mutations: MutationTree<IAuthState> = {
    setAuthenticating(state: IAuthState, newValue: boolean) {
        state.authenticating = newValue;
    },
    setUserAuth(state, newValue: Auth) {
        state.userAuth = newValue;
    },
    getidToken(state, newValue: string) {
        state.idToken = newValue;
    },
};

export default mutations;
