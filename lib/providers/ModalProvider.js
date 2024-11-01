'use client'
import { createContext, useState } from "react";
import AddRecipeModal from "../components/modal/AddRecipeModal";
import useDisclosure from "../components/useDisclosure";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
    const [AddRecipeOpened, AddRecipe] = useDisclosure();
    const [id, setId] = useState();

    return (
        <ModalContext.Provider value={{ AddRecipeOpened, AddRecipe, id, setId }}>
            <AddRecipeModal opened={AddRecipeOpened} onClose={AddRecipe.close} id={id} setId={setId} />
            {children}
        </ModalContext.Provider>
    )
}