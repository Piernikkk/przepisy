import { useState } from "react"

export default function useDisclosure(defaultState) {
    const [opened, setOpened] = useState(defaultState || false);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    return [opened, { open, close }]
}