import { sva } from "@/styled-system/css";

export const input = sva({
    slots: ['input', 'wrapper', 'label', 'area'],
    base: {
        input: {
            fontSize: '16px',
            color: 'text.0',
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            padding: '12px 16px',
            // paddingLeft: '6px',
            fontFamily: 'var(--font-poppins)',
            width: '100%',
            flex: 1,
            '&:active': {
                outline: 'none',
            }
        },
        area: {
            fontSize: '16px',
            color: 'text.0',
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            padding: '12px 16px',
            // paddingLeft: '6px',
            fontFamily: 'var(--font-poppins)',
            width: '100%',
            height: '202px',
            flex: 1,
            '&:active': {
                outline: 'none',
            }
        },
        wrapper: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border',
            borderRadius: '10px',
            display: 'flex',
            width: '100%',
            // height: '100%',
            alignItems: 'center',
            gap: '5px',
            '&:focus-within': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#fff',
            }
        },
        label: {
            fontSize: 14,
            color: 'text.0',
            marginBottom: '5px',
        }
    },
    variants: {
        withIcon: {
            true: {
                wrapper: {
                    paddingLeft: '16px',
                },
                input: {
                    paddingLeft: '6px',
                }
            }
        },
    },
});