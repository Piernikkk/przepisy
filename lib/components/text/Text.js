import { text } from "./styles";

export default function Text({ size, weight, color, otherStyle, children }) {
    return (
        <div className={text({ size, weight, color })}>{children}</div>
    )
}