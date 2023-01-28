<template>
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
                                            <label class="form-label"
                                                >User mail</label
                                            >
                                            <input
                                                type="email"
                                                class="form-control"
                                                placeholder="myemail@email.com"
                                                v-model="emailInput"
                                                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                                tittle="Oops invalid email"
                                                required
                                            />
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label"
                                                >Password</label
                                            >
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Password"
                                                v-model="PasswordInput"
                                                required
                                            />
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button
                                                class="btn btn-primary btn-block btn-lg fa-lg mb-3"
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
                                    <h2 class="mb-4">
                                        <B class="tittle">Microshop</B>
                                    </h2>
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
import { Auth } from "@/models/auth";
import axios, { AxiosHeaders } from "axios";
import router from "@/router";
import fakeShopApi from "@/api/fakeShopApi";

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
            await fakeShopApi
                .post("https://api.escuelajs.co/api/v1/auth/login", payload)
                .then((response) => {
                    fakeShopApi.defaults.headers.common["Authorization"] =
                        "Bearer " + response.data;
                    localStorage.setItem("token", response.data.access_token);
                    console.log(response);
                    router.push("/");
                })
                .catch((error) => {
                    var data = error.response.data;
                    alert("Oops! User not found");
                });
        },
    },
});
</script>

<style scoped>
.tittle {
    font-family: "Caveat", cursive !important;
    font-size: 70pt;
}
.btn {
    padding: 15px 30px;
    background-color: #d59c86;
    color: #454851;
    font-size: 20pt;
    font-weight: bolder;
    text-shadow: #b39f9f 1px 1px 2px;
}

.form-control:hover {
    background-color: #d59c868c;
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #6c6d70;
}
.form-control:focus {
    background-color: white;
    border: solid 1px #f3f3f4;
    box-shadow: 0 0 4px #d59c86;
}

.btn:hover {
    color: #ffffff;
    font-weight: bolder;
    text-shadow: #454851 1px 1px 2px;
}
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #d59c86;

    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        0deg,
        rgba(161, 161, 125, 1) 0%,
        rgba(213, 156, 134, 1) 100%
    );
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(
        0deg,
        rgba(161, 161, 125, 1) 0%,
        rgba(213, 156, 134, 1) 100%
    );
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
