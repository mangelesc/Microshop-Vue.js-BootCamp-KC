import { GetterTree } from "vuex";
import { IState } from "..";
import { IAuthState } from "./state";

const getters: GetterTree<IAuthState, IState> = {
    getAuthenticating(state: IAuthState) {
        return state.authenticating;
    },
    getisAuthenticated(state: IAuthState) {
        return state.isAuthenticated;
    },
    getuserAuth(state: IAuthState) {
        return state.userAuth;
    },
    getUserToken(state: IAuthState, newValue: string) {
        return state.userToken;
    },
};
export default getters;
