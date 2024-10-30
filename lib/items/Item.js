
import { IconCalendar, IconCalendarOff, IconCategory, IconClock, IconPlayerPlay, IconStairs, IconStar, IconStarFilled, IconTrophy } from "@tabler/icons-react";
import { css } from "@/styled-system/css";
import Text from "../components/text/Text";
import { flex } from "@/styled-system/patterns";
import IconTag from "./IconTag";
import { token } from "@/styled-system/tokens";
import { useState } from "react";

export default function Item({ name, desc, img, time, id, fav, changefavourite, ...props }) {

    return (
        <div className={container} {...props}>
            <div className={text}>
                <div className={description}>
                    <Text size={'mega'}>{name}</Text>
                    <div style={{ height: 10 }} />
                    <Text size={'label'} weight={'300'}>{desc}</Text>
                </div>
                {/* {width < 1300 && <div css={styles.image}>
                    <img width={500} style={{ borderRadius: 10 }} height={'auto'} src={img || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} />
                </div>} */}
                <div className={tags}>
                    <IconTag icon={fav ? IconStarFilled : IconStar} variants={'yellow'} onClick={() => changefavourite(id, !fav)} color={token('colors.yellow.0')}></IconTag>
                    <IconTag icon={IconClock} color={"#fca13a"}>{time}</IconTag>
                    {/* {!!stagesNumber && stagesNumber != 0 && <IconTag color={'purple'} icon={IconStairs}>{stagesNumber} {wronka(stagesNumber, { many: 'etapów', one: 'etap', few: 'etapy' })}</IconTag>} */}
                    {/* {reward && <IconTag icon={IconTrophy} color="orange">{reward}</IconTag>} */}
                </div>
            </div>
            <div className={image}>
                <img style={{ borderRadius: 10, width: 700 }} src={img || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} />
            </div>
        </div >
    )
}

const container = css({
    borderRadius: 15,
    backgroundColor: 'tile.0',
    border: `1px solid`,
    borderColor: 'border',
    padding: '50px',
    // paddingLeft: 30,
    // width: '100%',
    display: 'flex',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&:hover': {
        backgroundColor: 'tile.1',
    },
    transition: 'all, 0.3s ease-in-out'
})

const image = css({
    display: 'flex',
    justifyContent: 'right',
    // padding: 20,
    alignItems: 'center',
})

const description = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

const text = css({
    display: 'flex',
    // paddingRight: 20,
    gap: '20px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

const tags = css({
    marginTop: 10,
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
})

const title = css({
    textWrap: 'wrap',
})