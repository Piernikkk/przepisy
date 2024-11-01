import { css } from "@/styled-system/css";
import Input from "../input/Input";
import Text from "../text/Text";
import Modal from "./Modal";
import { IconPlus, IconX } from "@tabler/icons-react";
import Button from "../button";
import { useCallback, useContext, useEffect, useState } from "react";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";
import { v4 } from "uuid";

export default function AddRecipeModal({ opened, onClose: close, id, setId }) {
    const { recipes, dispatch } = useContext(RecipesContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredient] = useState([]);

    const onClose = useCallback(() => {
        close();
        setName('');
        setDescription('');
        setImage('');
        setId();
        setIngredient([]);
    }, [close]);

    useEffect(() => {
        if (!id) return;
        const recipe = recipes?.recipes?.find((f) => f.id == id);
        if (!recipe) return;
        setName(recipe.name);
        setDescription(recipe.description);
        setImage(recipe.image);
        setIngredient(recipe.ingredients);
    }, [id, recipes?.recipes])

    const onAdd = () => {
        dispatch({ type: id ? 'edit' : 'add', id, values: { name, description, image, ingredients } });

        onClose();
    }

    return (
        <Modal opened={opened} onClose={onClose} >
            <div className={container} onClick={e => e.stopPropagation()}>
                <div className={header}>
                    <Text size={'modal'}>{id ? 'Edytuj Przepis' : 'Dodaj Przepis'}</Text>
                    <IconX color="#fff" onClick={onClose} className={css({ cursor: 'pointer' })} />
                </div>
                <div className={css({ display: 'flex', gap: '10px' })}>
                    <div className={css({ flex: 1 })}>
                        <Text size={'tag'}>Nazwa</Text>
                        <Input value={name} onChange={(c) => setName(c.target.value)} />
                        <div className={css({ marginTop: '10px' })}></div>
                        <Text size={'tag'}>Opis</Text>
                        <Input isTextarea value={description} onChange={(c) => setDescription(c.target.value)} />
                        <div className={css({ marginTop: '10px' })}></div>
                        <Text size={'tag'}>Link do zdjecia</Text>onClose
                        <Input value={image} onChange={(c) => setImage(c.target.value)} />
                    </div>
                    <div className={css({ flex: 1 })}>
                        <Text size={'tag'}>Składniki</Text>
                        <div className={css({ maxHeight: '200px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '5px' })}>
                            {ingredients.map((m, i) => <Input key={i} value={m} onChange={(c) => setIngredient((ing) => { const newArray = ing; newArray[i] = c.target.value; console.log(newArray); return newArray; })} />)}

                        </div>
                        <Button theme={'white'} small onlyIcon icon={IconPlus} onClick={() => setIngredient((i) => [...i, ''])} />

                    </div>
                </div>
                <div className={foot}>onClose
                    <Button theme={'subtle'} onClick={onClose}>Anuluj</Button>
                    <Button onClick={onAdd} >{id ? 'Zapisz' : 'Dodaj'}</Button>
                </div>
            </div>
        </Modal>
    )
}
const container = css({
    padding: '15px 20px',
    backgroundColor: 'tile.0',
    zIndex: 202,
    border: '1px solid',
    borderRadius: '15px',
    borderColor: 'border',
    width: '1000px',
    // height: '500px',
})
const header = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '10px',
})
const foot = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '15px',
})