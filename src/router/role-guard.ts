import { RouteLocation } from "vue-router";

const tokenUser = (to: RouteLocation, from: RouteLocation, next: any) => {
    console.log(to, from, next);

    const userToken = localStorage.getItem("token");

    // meter token de la API
    if (userToken === "Admin") {
        // queremos navegar!
        next();
    } else {
        alert("Oops! You're not allowed here!");
        next({ name: "login" });
    }
};

export default tokenUser;
