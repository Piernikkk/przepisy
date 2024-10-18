
import { IconCalendar, IconCalendarOff, IconCategory, IconPlayerPlay, IconStairs, IconTrophy } from "@tabler/icons-react";
import { css } from "@/styled-system/css";
import Text from "../components/text/Text";

export default function Item({ name, desc, img, ...props }) {


    return (
        <div css={container} {...props}>
            <div css={text}>
                <div>
                    <Text size={'title'}>{name}</Text>
                    <div css={{ height: 5 }} />
                    <Text size={'subtitle'}>{desc}</Text>
                </div>
                {/* {width < 1300 && <div css={styles.image}>
                    <img width={500} style={{ borderRadius: 10 }} height={'auto'} src={img || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} />
                </div>} */}
                {/* <div css={tags}>
                    <IconTag icon={IconCategory}>{topic}</IconTag>
                    {!!stagesNumber && stagesNumber != 0 && <IconTag color={'purple'} icon={IconStairs}>{stagesNumber} {wronka(stagesNumber, { many: 'etapów', one: 'etap', few: 'etapy' })}</IconTag>}
                    {reward && <IconTag icon={IconTrophy} color="orange">{reward}</IconTag>}
                </div> */}
            </div>
            <div className={image}>
                <img width={500} style={{ borderRadius: 10 }} height={'auto'} src={img || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} />
            </div>
        </div >
    )
}

const container = css({
    borderRadius: 15,
    backgroundColor: 'tile.0',
    border: `2px solid border`,
    padding: 20,
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

const text = css({
    display: 'flex',
    // paddingRight: 20,
    gap: 20,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

const tags = css({
    marginTop: 10,
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
})

const title = css({
    textWrap: 'wrap',
})