import { forwardRef } from "react";
import { input } from "./styles";
import { token } from "@/styled-system/tokens";

export default forwardRef(function Input({ label, icon: Icon, radius, isTextarea, onChange, w, h, style, ...props }, ref) {
    const classes = input({ withIcon: !!Icon });

    return (
        <div style={style}>
            {label && <div className={classes.label}>{label}</div>}
            <div className={classes.wrapper}>
                {Icon && <Icon size={16} color={token('colors.text.1')} />}
                {isTextarea ? <textarea ref={ref} onChange={onChange} {...props} className={classes.input} /> : <input onChange={onChange} ref={ref} {...props} className={classes.input} />}
            </div>
        </div>
    )
});