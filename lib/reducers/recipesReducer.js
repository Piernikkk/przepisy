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
                    descripton: action.descripton,
                    favorite: action.favorite || false,
                }]
        }
    } else if (action.type == 'remove') {
        return recipes.filter((f) => f.id != action.id)
    }
}