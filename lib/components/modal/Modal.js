import { css, cva } from "@/styled-system/css"
import Text from "../text/Text"

export default function Modal({ opened, onClose, children }) {

    return (
        <div className={background({ opened: opened })} onClick={onClose}>
            {children}
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
        backgroundColor: '#00000095',
        transition: 'all 0.2s ease',
    },
    variants: {
        opened: { true: { opacity: 1, visibility: 'visible' } }
    }
})