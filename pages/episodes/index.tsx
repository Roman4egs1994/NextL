import React from 'react';
import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";

import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {getLayout} from "../../components/Layout/BaseLayout";
import Home from "../index";
import {GetServerSideProps} from "next";
import {redirect} from "next/navigation";

const authMe = async () => {
    const user = {}

    if(!user) {
        return {
            redirect: {
                destination: '/test',
                permanent: false
            }
        }
    }
}


//Вызывается каждый раз когда мы зайдем на страницу
// данные динамические
export const getServerSideProps: GetServerSideProps = async  ({res}) => {

    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=100') //Кеш на 100 секунд.
    //пока

    // const user = {} //axios.get('auth/me')
    // ИЛИ
    // await authMe ()  // ПРОВЕРКА, ЧТО НАМ МОЖНО ДАЛЬШЕ РАБОТАТЬ С КОМПРОНЕНТОЙ

    const episodes = await API.rickAndMorty.getEpisodes()

    const isAuth = true

    if (!episodes) {
        return {
            notFound: true
        }
    }

    if(!isAuth) {
        return {
            redirect: {
                destination: '/test',
                permanent: false
            }
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