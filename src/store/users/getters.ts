import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
    getIsLoading(state) {
        return state.isLoading;
    },
    getUser(state) {
        return state.loggedUser;
    },
};
export default getters;
