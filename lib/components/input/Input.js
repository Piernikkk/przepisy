import { forwardRef } from "react";
import { input } from "./styles";
import { token } from "@/styled-system/tokens";

export default forwardRef(function Input({ label, icon: Icon, radius, isTextarea, onChange, value, w, h, style, ...props }, ref) {
    const classes = input({ withIcon: !!Icon });

    return (
        <div className={style}>
            {label && <div className={classes.label}>{label}</div>}
            <div className={classes.wrapper}>
                {Icon && <Icon size={16} color={token('colors.text.1')} />}
                {isTextarea ? <textarea ref={ref} value={value} onChange={onChange} {...props} className={classes.area} /> : <input onChange={onChange} value={value} ref={ref} {...props} className={classes.input} />}
            </div>
        </div>
    )
});