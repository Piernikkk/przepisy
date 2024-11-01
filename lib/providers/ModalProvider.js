'use client'
import { createContext } from "react";
import AddRecipeModal from "../components/modal/AddRecipeModal";
import useDisclosure from "../components/useDisclosure";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
    const [AddRecipeOpened, AddRecipe] = useDisclosure();

    return (
        <ModalContext.Provider value={[AddRecipeOpened, AddRecipe]}>
            <AddRecipeModal opened={AddRecipeOpened} onClose={AddRecipe.close} />
            {children}
        </ModalContext.Provider>
    )
}