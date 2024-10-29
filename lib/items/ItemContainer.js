import { css } from "@/styled-system/css"
import Item from "./Item"

export default function ItemContainer({ recipes }) {
    return (
        <>
            <div className={container}>
                {recipes?.map((r) => <Item key={r.id} name={r.name} desc={r.description} />)}
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
