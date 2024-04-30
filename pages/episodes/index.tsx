import React from 'react';
import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";

import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {getLayout} from "../../components/Layout/BaseLayout";
import Home from "../index";

//Вызывается каждый раз когда мы зайдем на страницу
// данные динамические
export const getServerSideProps = async  () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episodes
        }
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {

    const  {episodes} = props

    const episodesList = episodes.results.map((episod) => {
        return (
            <Card  key={episod.id} name={episod.name} />
        )
    })

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    );
};

Episodes.getLayout = getLayout

export default Episodes;