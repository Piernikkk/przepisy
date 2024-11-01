import { css } from "@/styled-system/css";
import Input from "../input/Input";
import Text from "../text/Text";
import Modal from "./Modal";
import { IconX } from "@tabler/icons-react";
import Button from "../button";
import { useCallback, useContext, useState } from "react";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";

export default function AddRecipeModal({ opened, onClose: close }) {
    const { recipes, dispatch } = useContext(RecipesContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const onClose = useCallback(() => {
        close();
        setName('');
        setDescription('');
        setImage('');
    }, [close]);

    const onAdd = () => {
        dispatch({ type: 'add', name, description, image });
        onClose();
    }

    return (
        <Modal opened={opened} onClose={onClose} >
            <div className={container} onClick={e => e.stopPropagation()}>
                <div className={header}>
                    <Text size={'modal'}>Dodaj Przepis</Text>
                    <IconX color="#fff" onClick={onClose} className={css({ cursor: 'pointer' })} />
                </div>
                <Text size={'tag'}>Nazwa</Text>
                <Input value={name} onChange={(c) => setName(c.target.value)} />
                <div className={css({ marginTop: '10px' })}></div>
                <Text size={'tag'}>Opis</Text>
                <Input isTextarea value={description} onChange={(c) => setDescription(c.target.value)} />
                <div className={css({ marginTop: '10px' })}></div>
                <Text size={'tag'}>Link do zdjecia</Text>
                <Input value={image} onChange={(c) => setImage(c.target.value)} />
                <div className={foot}>
                    <Button theme={'subtle'} onClick={onClose}>Anuluj</Button>
                    <Button onClick={onAdd} >Dodaj</Button>
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
    width: '500px',
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