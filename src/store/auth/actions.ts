import fakeShopApi from "@/api/fakeShopApi";
import { Auth } from "@/models/auth";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthState } from "./state";

const actions: ActionTree<IAuthState, IState> = {
    //LogIn Function
    async fetchAuth({ commit }, payload: Auth) {
        commit("setAuthenticating", true);

        await fakeShopApi
            .post<unknown, AxiosResponse<any>>("auth/login", payload)
            .then((response) => {
                fakeShopApi.defaults.headers.common["Authorization"] =
                    "Bearer " + response.data;
                localStorage.setItem("token", response.data.access_token);
                console.log(response);
                commit("setisisAuthenticated", true);
                commit("setUserToken", response.data.access_token);
                router.push("/");
            })
            .catch((error) => {
                alert("Oops! User not found");
                router.push("/login");
            });

        commit("setAuthenticating", false);
    },

    // CheckToken Function
    async fetchCheckToken({ commit }, token: string) {
        const valid = false;
        commit("setAuthenticating", true);
        if (token != null) {
            await fakeShopApi
                .get("auth/profile")
                .then((response: any) => {
                    if (response.request.status === 200) {
                        console.log(response.data.id);
                        if (
                            localStorage.getItem("idUser") != response.data.id
                        ) {
                            localStorage.setItem("idUser", response.data.id);
                        }
                    }
                    const valid = true;
                })
                .catch((error) => {
                    router.push("/login");
                    alert("Oops! User not found");
                });
        } else {
            router.push("/login");
            alert("Oops! You're not allowed here!");
        }
        commit("setAuthenticating", false);
        return valid;
    },
};

export default actions;
