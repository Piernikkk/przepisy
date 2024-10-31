'use client';
import AddRecipeModal from "@/lib/components/modal/AddRecipeModal";
import Modal from "@/lib/components/modal/Modal";
import useDisclosure from "@/lib/components/useDisclosure";
import Header from "@/lib/items/Header";
import Item from "@/lib/items/Item";
import ItemContainer from "@/lib/items/ItemContainer";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";
import { useContext, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [AddRecipeOpened, AddRecipe] = useDisclosure();

  const { recipes, dispatch } = useContext(RecipesContext);
  const [filters, setFilters] = useState([{ label: 'Show only favourites', name: 'fav', value: false, visible: true }, { name: 'search', value: '', visible: false }]);

  return (
    <div>
      <AddRecipeModal opened={AddRecipeOpened} onClose={AddRecipe.close} />
      <Header filters={filters} setFilters={setFilters} searchValue={searchValue} setSearchValue={setSearchValue} onAddClick={AddRecipe.open} />
      <ItemContainer recipes={recipes} dispatch={dispatch} filters={filters} searchValue={searchValue} />

    </div>
  );
}
