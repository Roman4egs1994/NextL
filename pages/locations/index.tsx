import React, {useEffect} from 'react';
import {API} from "../../assets/api/api";
import {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";

import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {Card} from "../../components/Card/Card";
import {getLayout} from "../../components/Layout/BaseLayout";
import Episodes from "../episodes";


const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET'
    }).then(res => res.json())
}

export const getStaticProps = async  () => {

    const queryClient = new QueryClient()
  await  queryClient.fetchQuery(['locations'], getLocations)


    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}


const Locations = () => {
    const {data: locations}  = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

    if(!locations) {
        return  null
    }

    const locationList = locations.results.map((location) => {
        return (
            <Card key={location.id} name={location.name}/>
        )
    })

    return (
        <PageWrapper>
            {locationList}
        </PageWrapper>
    );
};

Locations.getLayout = getLayout
export default Locations;