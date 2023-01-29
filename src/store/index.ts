import { User } from "@/models/user";
import { createStore } from "vuex";
import cartModule from "./cart";
import usersModule from "./users";
import productsModule from "./products";
import authModule from "./auth";

export interface IState {
    user?: User;
}

export default createStore<IState>({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        auth: authModule,
        cart: cartModule,
        users: usersModule,
        products: productsModule,
    },
});
