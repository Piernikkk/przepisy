import { button } from "./styles";

export default function Button({ children, fullWidth, icon: Icon, css: otherCss, theme, small, radius, onlyIcon, noPadding, ...props }) {
    return (
        <div className={button({ padding: !noPadding, small, theme, width: fullWidth ? 'full' : '' })} {...props}>
            {Icon && <Icon size={24} />}
            {!onlyIcon && children}
        </div>
    )
}
