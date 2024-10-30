import { css } from "@/styled-system/css"

export default function Filters({ filters }) {
    return (
        <div className={container}>
            <div className={item}>

            </div>
        </div>
    )
}

const container = css({
    zIndex: 10,
    border: 'solid 1px',
    borderColor: 'border',
    borderRadius: '30px',
    backgroundColor: 'tile.0',
})

const item = css({
    display: 'flex',
})