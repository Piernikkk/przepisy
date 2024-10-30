import { cva } from "@/styled-system/css/cva.mjs";

export default function IconTag({ icon: Icon, color, children, variants, css: otherCss, compact, noTruncate, noOverflow, ...props }) {
    // const tagColors = defaultColors[color] || colors;

    return (
        <div>
            <div className={reward({ noTruncate, color: variants })} {...props}>
                {Icon && <Icon size={compact ? 18 : 24} color={color || tagColors[6]} />}
                {!!children && <div className={text({ compact })}>
                    {children}
                </div>}
            </div>
        </div>
    )
}

const text = cva({
    base: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100px',
        color: 'text.0',
    },
    variants: {
        noTruncate: { true: { maxWidth: undefined } }
    }
});
const reward = cva({
    base: {
        padding: '12px 16px',
        maxWidth: 'max-content',
        borderRadius: '9999px',
        backgroundColor: 'dimmed.orange.5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        color: 'orange.1',
        fontWeight: 500,
    },
    variants: {
        compact: {
            true: { padding: '8px 12px', fontSize: 14 }
        },
        color: {
            yellow: { backgroundColor: 'dimmed.yellow.0', color: 'yellow.0' }
        }
    }

})