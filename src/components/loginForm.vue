<template>
    <div class="formTittle">
        <h1>{{ msg }}</h1>
    </div>

    <section class="h-100 gradient-form" style="background-color: #eee">
        <div class="container py-5 h-100">
            <div
                class="row d-flex justify-content-center align-items-center h-100"
            >
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                            style="width: 185px"
                                            alt="logo"
                                        />
                                        <h4 class="mt-1 mb-5 pb-1">
                                            Please login to your account
                                        </h4>
                                    </div>

                                    <form @submit.prevent="loginFunc">
                                        <div class="form-outline mb-4">
                                            <label
                                                class="form-label"
                                                for="form2Example11"
                                                >email</label
                                            >
                                            <input
                                                type="email"
                                                class="form-control"
                                                placeholder="Write your email"
                                                v-model="emailInput"
                                            />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label
                                                class="form-label"
                                                for="form2Example22"
                                                >Password</label
                                            >
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Password"
                                                v-model="PasswordInput"
                                            />
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button
                                                class="btn btn-primary btn-block fa-lg mb-3"
                                                type="submit"
                                            >
                                                Log in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                class="col-lg-6 d-flex align-items-center gradient-custom-2"
                            >
                                <div
                                    class="text-white px-3 py-4 p-md-5 mx-md-4"
                                >
                                    <h4 class="mb-4">
                                        We are more than just a company
                                    </h4>
                                    <p class="small mb-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import fetchAuth from "@/composables/useAuth";
import axios from "axios";
import { Auth } from "@/models/auth";

export default defineComponent({
    name: "LoginForm",
    props: {
        msg: String,
    },
    data() {
        return {
            emailInput: "",
            PasswordInput: "",
        };
    },
    methods: {
        async loginFunc() {
            var payload: Auth = {
                email: this.emailInput,
                password: this.PasswordInput,
            };
            console.log(payload);
            await axios
                .post("https://api.escuelajs.co/api/v1/auth/login", payload)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    var data = error.response.data;
                    alert("User not found");
                });
        },
    },
});
</script>

<style scoped>
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #d59c86;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
        to right,
        #a1a17d,
        #e9e3aa,
        #e9e3aa,
        #d59c86
    );

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #454851, #d59c86, #d59c86, #d59c86);
}

@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}
@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
}
</style>
