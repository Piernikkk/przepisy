import { css } from "@/styled-system/css"
import Text from "../components/text/Text"
import { IconCheck } from "@tabler/icons-react"

export default function CheckBox({ checked, label, name, setFilters }) {
    function onClick() {
        setFilters((s) => s.map((f) => {
            if (f.name == name)
                f.value = !checked;
            return f
        }));
    }

    return (
        <div className={item}>
            <div className={checkBox} onClick={onClick}>
                {checked && <IconCheck size={16} color="#E9ECEF" stroke={3} />}
            </div><Text size={'tag'}>{label}</Text>
        </div>
    )
}

const checkBox = css({
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    border: '2px solid',
    borderColor: 'border',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
})

const item = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
})
