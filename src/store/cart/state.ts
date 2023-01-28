import { Product } from "@/models/product";

// Creamos una interface para el carro
export interface ICartState {
    products: Product[];
    isOpen: boolean;
}

function state(): ICartState {
    return {
        products: [],
        isOpen: false,
    };
}

export default state;
