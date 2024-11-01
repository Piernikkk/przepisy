import { button } from "./styles";

export default function Button({ children, absolute, fullWidth, icon: Icon, css: otherCss, theme, small, radius, onlyIcon, noPadding, ...props }) {
    return (
        <div className={button({ padding: !noPadding, absolute, small, theme, width: fullWidth ? 'full' : '' })} {...props}>
            {Icon && <Icon size={small ? 18 : 24} />}
            {!onlyIcon && children}
        </div>
    )
}
