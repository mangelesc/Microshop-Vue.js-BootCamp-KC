import fakeShopApi from "@/api/fakeShopApi";
import { Auth } from "@/models/auth";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthState } from "./state";

const actions: ActionTree<IAuthState, IState> = {
    async fetchAuth({ commit }, login: Auth) {
        commit("authenticating", true);

        const { data } = await fakeShopApi.post<unknown, AxiosResponse<any>>(
            "auth/login",
            { email: login.email, password: login.password }
        );

        if (data.access_token) {
            commit("authenticating", false);
            commit("setUserAuth", login);
            commit("getidToken", data.access_token);
        } else {
            alert("Oops, invalid user/password");
        }
    },
};

export default actions;
