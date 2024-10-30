import { css, cva } from "@/styled-system/css"
import Text from "../text/Text"

export default function Modal({ opened, onClose }) {
    return (
        <div className={background({ opened: opened })} onClick={onClose}>
            <Text>Nigger</Text>
        </div>
    )
}

const background = cva({
    base: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0,
        visibility: 'hidden',
        backgroundColor: '#ffffff20',
    },
    variants: {
        opened: { true: { opacity: 1, visibility: 'visible' } }
    }
})