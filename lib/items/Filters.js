import { css, cva } from "@/styled-system/css"
import Text from "../components/text/Text"
import CheckBox from "./CheckBox"

export default function Filters({ filters, setFilters }) {

    return (
        <div className={container}>
            {filters?.map((f, i) => !!f.visible && <CheckBox key={i} label={f.label} name={f.name} checked={f.value} setFilters={setFilters} />)}
        </div>
    )
}

const container = css({
    zIndex: 10,
    border: 'solid 1px',
    // width: '210px',
    // height: '50px',
    borderColor: 'border',
    borderRadius: '15px',
    backgroundColor: 'tile.0',
    position: 'absolute',
    top: '70px',
    right: '15px',
    gap: '7px',
    display: 'flex',
    padding: '15px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
})
