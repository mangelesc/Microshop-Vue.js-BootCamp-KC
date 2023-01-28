import { GetterTree } from "vuex";
import { IState } from "..";
import { IAuthState } from "./state";

const getters: GetterTree<IAuthState, IState> = {
    getAuthenticating(state) {
        return state.authenticating;
    },
    getuserAuth(state) {
        return state.userAuth;
    },
    getidToken(state) {
        return state.idToken;
    },
};
export default getters;
