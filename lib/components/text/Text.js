import { text } from "./styles";

export default function Text({ size, weight, color, otherStyle, children, ...props }) {
    return (
        <div {...props} onClick={(e) => e.stopPropagation()} className={text({ size, weight, color })}>{children}</div>
    )
}