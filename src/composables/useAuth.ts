import { Auth } from "@/models/auth";
import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
    const store = useStore();

    return {
        // GETTERS
        Authenticating: computed(
            () => store.getters["users/getAuthenticating"]
        ),
        userAuth: computed(() => store.getters["users/getuserAuth"]),
        idToken: computed(() => store.getters["users/getidToken"]),

        // ACTIONS
        fetchAuth: (login: Auth) => store.dispatch("users/fetchAuth", login),
    };
};

export default useAuth;
