'use client';
import { css } from "@/styled-system/css"
import Text from "../components/text/Text"
import SearchBar from "../components/SearchBar"
import { useState } from "react"
import { IconBook } from "@tabler/icons-react";
import { token } from "@/styled-system/tokens";

export default function Header() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={container}>
            <div className={title} >
                <IconBook color={token('colors.text.0')} size={38} />
                <Text size={'title'}>Przepisy</Text>
            </div>
            <SearchBar setValue={setSearchValue} value={searchValue} />
        </div>
    )
}

const container = css({
    display: 'flex',
    // height: '150px',
    justifyContent: 'left',
    alignItems: 'center',
    gap: '40px',
    padding: '10px 30px',
})

const title = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
})