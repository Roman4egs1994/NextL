import React from 'react';
import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
// import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/BaseLayout";
import dynamic from "next/dynamic";
import * as module from "module";

//Для того что бы асинхронно подтягивать данные
const CharacterCard = dynamic(() => import('../../components/Card/CharacterCard/CharacterCard').then(
    module => module.CharacterCard,) , {
    // ssr : false,
    // loading: () => <h1>Loading...</h1>
})


//страничка собирается только во время билда . Она будет всегда одинаковая . Она
//кешируется
export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        },
        // revalidate: 60,  //через 60 секунд когда мы зайдем на эндпоинт сделает нас перевалидацию данных
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {

    const {characters} = props

    const charactersList = characters.results.map((character) => {
        return (
            <CharacterCard key={character.id} character={character}/>
        )
    })

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    );
};

Characters.getLayout = getLayout
export default Characters;