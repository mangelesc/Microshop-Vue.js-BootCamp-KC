import { Auth } from "@/models/auth";
import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
    const store = useStore();

    return {
        // GETTERS
        isAuthenticated: computed(
            () => store.getters["auth/getisAuthenticated"]
        ),
        userAuth: computed(() => store.getters["auth/getuserAuth"]),
        userToken: computed(() => store.getters["auth/getUserToken"]),

        //MUTATIONS
        logOut: () => store.commit("cart/setLogOut"),

        // ACTIONS
        fetchAuth: (payload: Auth) => store.dispatch("auth/fetchAuth", payload),
        fetchCheckToken: () => store.dispatch("auth/fetchCheckToken"),
    };
};

export default useAuth;
