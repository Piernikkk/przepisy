'use client'
import Text from "@/lib/components/text/Text";
import IconTag from "@/lib/items/IconTag";
import { ModalContext } from "@/lib/providers/ModalProvider";
import { RecipesContext } from "@/lib/providers/RecipiesProvider";
import { css } from "@/styled-system/css";
import { token } from "@/styled-system/tokens";
import { IconArrowLeft, IconClock, IconEdit, IconPointFilled, IconStar, IconStarFilled, IconTrash } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Recipe() {
    const { recipes, dispatch } = useContext(RecipesContext);
    const router = useRouter();
    const { id } = useParams();

    const { AddRecipeOpened, AddRecipe, setId } = useContext(ModalContext);

    const changefavourite = (id, value) => {
        dispatch({ type: 'fav', id, value: value });
    };

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        setRecipe(recipes?.recipes?.find((f) => f.id == id));
    }, [recipes, id])

    return (
        <div className={container}>
            {/* <img width={500} css={{ borderRadius: 10 }} height={'100%'} src={cover || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} /> */}
            <div className={content}>
                <div className={info}>
                    <div className={back}>
                        <IconArrowLeft onClick={router.back} color={'#fff'} size={30} />
                        <div className={css({ display: 'flex', gap: '10px' })}>
                            <IconEdit color={'#fff'} size={30} onClick={() => { setId(id); AddRecipe.open(); }} />
                            <IconTrash color={token('colors.red.9')} size={30} onClick={() => { dispatch({ type: 'remove', id }); router.back(); }} />
                        </div>
                    </div>
                    <Text size={'title'} >{recipe?.name}</Text>
                    <Text size={'description'} weight={400}>{recipe?.description}</Text>
                    <img width={'100%'} className={css({ borderRadius: 10 })} height={'auto'} src={recipe?.image || 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg'} />

                    <div className={css({ marginTop: '10px' })}></div>
                    <Text size={'subtitle'}>Składniki:</Text>
                    {recipe?.ingredients?.map((r, i) => <div className={ingredient} key={i}><IconPointFilled color="#fff" /><Text size={'tag'}>{r}</Text></div>)}

                    <div className={css({ marginTop: '10px' })}></div>
                    <Text size={'subtitle'}>Sposób przygotowania:</Text>
                    {recipe?.instructions?.map((r, i) => <div className={ingredient} key={i}><IconPointFilled color="#fff" /><Text size={'tag'}>{r}</Text></div>)}

                    <div className={tags}>
                        <IconTag icon={recipe?.favourite ? IconStarFilled : IconStar} variants={'yellow'} onClick={() => changefavourite(id, !recipe?.favourite)} color={token('colors.yellow.0')}>{recipe?.favourite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}</IconTag>
                        <IconTag icon={IconClock} color={"#fca13a"}>{recipe?.cookingTime}</IconTag>
                    </div>
                </div>
            </div>
        </div>
    )
}

const container = css({
    display: 'flex',
    justifyContent: 'center',
});

const ingredient = css({
    display: 'flex',
    marginLeft: '20px',
    alignItems: 'center',
});

const content = css({
    width: '800px',
    marginLeft: '30px',
    marginRight: '30px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

const info = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
});

const main = css({
    // border: `2px solid ${borderColor}`,
    // padding: '20px 25px',
    // borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
});

const back = css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '5px',
    justifyContent: 'space-between',
});

const tags = css({
    marginTop: '15px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '30px',
})