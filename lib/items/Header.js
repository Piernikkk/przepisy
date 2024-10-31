'use client';
import { css } from "@/styled-system/css"
import Text from "../components/text/Text"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import { IconBook, IconFilter } from "@tabler/icons-react";
import { token } from "@/styled-system/tokens";
import Button from "../components/button";
import Filters from "./Filters";

export default function Header({ filters, setFilters, searchValue, setSearchValue, onAddClick }) {

    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <div className={container}>
            <div className={title} >
                <IconBook color={token('colors.text.0')} size={38} />
                <Text size={'title'}>Przepisy</Text>
            </div>
            <div className={bar}>
                <SearchBar setValue={setSearchValue} value={searchValue} />
                <Button icon={IconFilter} onClick={() => setFiltersOpen((s) => !s)} onlyIcon />
                <Button onClick={onAddClick}>Dodaj</Button>
            </div>
            {filtersOpen && <Filters filters={filters} setFilters={setFilters} />}
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
    position: 'relative',

})

const title = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
})

const bar = css({
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
})