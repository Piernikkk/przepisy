'use client';
import Header from "@/lib/items/Header";
import Item from "@/lib/items/Item";
import ItemContainer from "@/lib/items/ItemContainer";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";
import { useContext } from "react";

export default function Home() {

  const { recipes, dispatch } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      <ItemContainer recipes={recipes?.recipes} />

    </div>
  );
}
