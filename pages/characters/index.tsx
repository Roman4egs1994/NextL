import React from 'react';
import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";

import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/BaseLayout";
import Home from "../index";


//страничка собирается только во время билда . Она будет всегда одинаковая . Она
//кешируется
export const getStaticProps = async  () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        }
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {

    const  {characters} = props

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