import React from 'react';
import Image, {StaticImageData} from "next/image";
import aliveStatus from "../../../../public/statuses/alive.png";
import {CharacterStatusType} from "../../../../assets/api/rick-and-morty-api";

type PropsType = {
    status: CharacterStatusType,
    src: StaticImageData
}


const Status = (props: PropsType) => {

    const {status, src} = props

    return (
        <div>
            <Image src={src} alt={'photo'} width={20} height={20}></Image>
        </div>
    );
};

export default Status;