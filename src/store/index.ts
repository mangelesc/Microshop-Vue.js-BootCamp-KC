import { User } from "@/models/user";
import { createStore } from "vuex";
import cartModule from "./cart";
import usersModule from "./users";
import productsModule from "./products";
import authModule from "./auth";

export interface IState {
    authUser: User | null;
    greeting: string;
}
export default createStore<IState>({
    state: {
        authUser: null,
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
        auth: authModule,
        cart: cartModule,
        users: usersModule,
        products: productsModule,
    },
});
