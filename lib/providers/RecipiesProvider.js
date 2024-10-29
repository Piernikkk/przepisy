'use client';
import { createContext, useReducer } from "react";
import recipesReducer from "../reducers/recipesReducer";

// export const RecipesContext = createContext();
export const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
    const pastaRecipe = {
        name: "Makaron z kurczakiem i szpinakiem",
        description: "Delikatny makaron z kurczakiem, szpinakiem i kremowym sosem śmietanowym.",
        cookingTime: "25 minut",
        ingredients: [
            "200g makaronu penne",
            "2 filety z kurczaka",
            "2 garście świeżego szpinaku",
            "200ml śmietanki 30%",
            "2 ząbki czosnku",
            "2 łyżki oliwy z oliwek",
            "Sól, pieprz do smaku",
            "Ser parmezan do posypania"
        ],
        instructions: [
            "Ugotuj makaron według instrukcji na opakowaniu.",
            "Pokrój kurczaka w kostkę i podsmaż na oliwie na złoty kolor.",
            "Dodaj posiekany czosnek i smaż przez minutę.",
            "Dodaj świeży szpinak i duś, aż zwiędnie.",
            "Wlej śmietankę, dopraw solą i pieprzem, a następnie gotuj przez kilka minut, aż sos zgęstnieje.",
            "Dodaj ugotowany makaron do sosu, dokładnie wymieszaj.",
            "Podawaj z posypanym parmezanem."
        ]
    };
    const pizzaRecipe = {
        name: "Pizza Margherita",
        description: "Klasyczna włoska pizza z sosem pomidorowym, mozzarellą i świeżą bazylią.",
        cookingTime: "45 minut",
        ingredients: [
            "250g mąki",
            "150ml ciepłej wody",
            "7g suchych drożdży",
            "2 łyżki oliwy z oliwek",
            "1 łyżeczka soli",
            "200g sosu pomidorowego",
            "200g mozzarelli",
            "Świeża bazylia",
            "Sól, pieprz, oliwa z oliwek do smaku"
        ],
        instructions: [
            "W misce wymieszaj mąkę, drożdże, sól i oliwę z ciepłą wodą, aby uzyskać elastyczne ciasto.",
            "Odstaw ciasto na 30 minut, aby wyrosło.",
            "Rozwałkuj ciasto na okrągły placek i przełóż na blachę do pieczenia.",
            "Rozsmaruj sos pomidorowy na cieście, dodaj plastry mozzarelli.",
            "Piecz pizzę w nagrzanym piekarniku do 220°C przez 15 minut, aż ser się rozpuści i ciasto będzie chrupiące.",
            "Po upieczeniu udekoruj świeżą bazylią i skrop oliwą z oliwek."
        ]
    };
    const spaghettiRecipe = {
        name: "Spaghetti Bolognese",
        description: "Tradycyjne włoskie spaghetti z mięsem mielonym w sosie pomidorowym.",
        cookingTime: "30 minut",
        ingredients: [
            "200g makaronu spaghetti",
            "300g mięsa mielonego wołowego",
            "1 cebula",
            "2 ząbki czosnku",
            "400g pomidorów w puszce",
            "2 łyżki oliwy z oliwek",
            "Sól, pieprz, zioła włoskie do smaku",
            "Parmezan do posypania"
        ],
        instructions: [
            "Ugotuj makaron według instrukcji na opakowaniu.",
            "Na patelni rozgrzej oliwę i podsmaż posiekaną cebulę oraz czosnek.",
            "Dodaj mięso mielone i smaż, aż się zarumieni.",
            "Dodaj pomidory z puszki, sól, pieprz i zioła. Duś sos na małym ogniu przez 15 minut.",
            "Podawaj spaghetti z sosem i posyp parmezanem."
        ]
    };


    const initialRecipes = [pastaRecipe, spaghettiRecipe, pizzaRecipe];

    const [recipes, dispatch] = useReducer(recipesReducer, { recipes: initialRecipes });

    return (
        <RecipesContext.Provider value={{ recipes, dispatch }}>
            {children}
        </RecipesContext.Provider>
    )
}