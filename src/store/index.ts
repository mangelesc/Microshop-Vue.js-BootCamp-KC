import { User } from "@/models/user";
import { createStore } from "vuex";
import cartModule from "./cart";
import usersModule from "./users";
import productsModule from "./products";
import authModule from "./auth";

export interface IState {
    authUser: boolean;
    greeting: string;
}

export default createStore<IState>({
    state: {
        authUser: false,
        greeting: "Hola a todas!",
    },
    mutations: {
        cambiaSaludo(state, saludo: string) {
            state.greeting = saludo;
        },
    },
    getters: {
        saludo(state) {
            return state.greeting;
        },
    },
    actions: {},
    modules: {
        cart: cartModule,
        users: usersModule,
        products: productsModule,
        auth: authModule,
    },
});
