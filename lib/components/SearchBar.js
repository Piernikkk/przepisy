import { IconSearch } from "@tabler/icons-react";
import Input from "./input/Input";
import { css } from "@/styled-system/css";

export default function SearchBar({ value, setValue, ...props }) {
    return (
        <div className={seachBarContainer} {...props} >
            <Input placeholder={'Search'} value={value} style={{ display: 'flex', flex: 1 }} icon={IconSearch} onChange={(e) => setValue(e.currentTarget.value)} />
        </div>
    )
}

const seachBarContainer = css({
    display: 'flex',
    flex: 1,
    minWidth: '200px'
})