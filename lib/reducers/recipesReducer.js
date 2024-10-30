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
                    favourite: action.favorite || false,
                }]
        }
    } else if (action.type == 'remove') {
        return { ...state, recipes: state.recipes.filter((f) => f.id != action.id) }
    }
    else if (action.type == 'fav') {
        const newArray = [...state.recipes];

        newArray.find((f) => f.id == action.id).favourite = action.value;
        console.log('newArray', newArray.find((f) => f.id == action.id).favourite);
        return { ...state, recipes: [...newArray] }
    }
}