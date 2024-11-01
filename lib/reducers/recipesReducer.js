import { v4 } from "uuid";

export default function recipesReducer(state, action) {
    if (action.type == 'add') {
        return {
            ...state,
            recipes: [
                ...state.recipes,
                {
                    id: v4(),
                    name: action.name,
                    description: action.description,
                    image: action.image,
                    favourite: action.favorite || false,
                }]
        }
    } else if (action.type == 'remove') {
        return { ...state, recipes: state.recipes.filter((f) => f.id != action.id) }
    }
    else if (action.type == 'fav') {
        const newArray = [...state.recipes];

        const item = newArray?.find((f) => f.id == action.id);
        if (item)
            item.favourite = action.value;

        return { ...state, recipes: [...newArray] }
    }
}