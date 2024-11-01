import { css } from "@/styled-system/css"
import Item from "./Item"

export default function ItemContainer({ recipes, dispatch, filters, searchValue, onClick }) {

    const changefavourite = (id, value) => {
        dispatch({ type: 'fav', id: id, value: value });
    };

    const fil = (r) => {
        const filtered = r;

        if (filters?.find((f) => f.name == 'fav').value == true) {
            return filtered.favourite == true;
        }
        if (searchValue != '') {
            return filtered.name?.toLowerCase().includes(searchValue.toLowerCase());
        }
        return filtered
    };


    return (
        <>
            <div className={container}>
                {recipes?.recipes?.filter(fil)?.map((r, i) => <Item key={i} img={r?.image} onClick={onClick} name={r.name} desc={r.description} fav={r.favourite} id={r.id} time={r.cookingTime} changefavourite={changefavourite} />)}
            </div>
        </>
    )
}

const container = css({
    display: 'flex',
    flexDirection: 'column',
    // height: '150px',
    gap: '40px',
    padding: '10px 30px',
    flexDirection: 'column',
})
