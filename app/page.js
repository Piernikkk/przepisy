'use client';
import Modal from "@/lib/components/modal/Modal";
import Header from "@/lib/items/Header";
import Item from "@/lib/items/Item";
import ItemContainer from "@/lib/items/ItemContainer";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";
import { useContext, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const { recipes, dispatch } = useContext(RecipesContext);
  const [filters, setFilters] = useState([{ label: 'Show only favourites', name: 'fav', value: false, visible: true }, { name: 'search', value: '', visible: false }]);

  return (
    <div>
      <Modal />
      <Header filters={filters} setFilters={setFilters} searchValue={searchValue} setSearchValue={setSearchValue} />
      <ItemContainer recipes={recipes} dispatch={dispatch} filters={filters} searchValue={searchValue} />

    </div>
  );
}
