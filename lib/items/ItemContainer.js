import { css } from "@/styled-system/css"
import Item from "./Item"

export default function ItemContainer({ recipes, dispatch }) {
    function changefavourite(id, value) {
        dispatch({ type: 'fav', id: id, value: value });
    }


    return (
        <>
            <div className={container}>
                {recipes?.recipes?.map((r, i) => <Item key={i} name={r.name} desc={r.description} fav={r.favourite} id={r.id} time={r.cookingTime} changefavourite={changefavourite} />)}
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
