import { v4 } from "uuid";

export default function recipesReducer(state, action) {
    if (action.type == 'add') {
        return {
            ...state,
            recipes: [
                ...state.recipes,
                {
                    ...action.values,
                    id: v4(),
                    favourite: false,
                }]
        }
    } else if (action.type == 'remove') {
        return { ...state, recipes: state.recipes.filter((f) => f.id != action.id) }
    }
    else if (action.type == 'edit') {
        const recipe = state.recipes.find(r => r.id == action.id);
        const recipeIndex = state.recipes.findIndex(r => r.id == action.id);
        const newArray = [...state.recipes];
        newArray[recipeIndex] = {
            ...recipe,
            ...action.values
        }

        return {
            ...state,
            recipes: newArray,
        }
    }
    else if (action.type == 'fav') {
        const newArray = [...state.recipes];

        const item = newArray?.find((f) => f.id == action.id);
        if (item)
            item.favourite = action.value;

        return { ...state, recipes: [...newArray] }
    }
}