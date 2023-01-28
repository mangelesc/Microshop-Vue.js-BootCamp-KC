import fakeShopApi from "@/api/fakeShopApi";
import { RouteLocation } from "vue-router";

const tokenUser = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userToken = localStorage.getItem("token");

    // meter token de la API
    if (userToken != null) {
        const valido = fakeShopApi
            .get("auth/profile")
            .then((response: any) => {
                if (response.request.status === 200) {
                    console.log(response.data.id);
                    if (localStorage.getItem("idUser") != response.data.id) {
                        localStorage.setItem("idUser", response.data.id);
                    }
                    next();
                }
            })
            .catch((error) => {
                const data = error.response.data;
                alert("Oops! User not found");
                next({ name: "login" });
            });
    } else {
        alert("Oops! You're not allowed here!");
        next({ name: "login" });
    }
};

export default tokenUser;
