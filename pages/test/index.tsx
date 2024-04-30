import React from 'react';
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {getLayout} from "../../components/Layout/BaseLayout";
import * as path from "path";
import * as process from "process";
import fs from  'fs/promises'

export const getStaticProps = async  () => {

    const getDataParsed = async () : Promise<{title: string}> => {
        const filePatch = path.join(process.cwd(),'public', 'staticData.json')

        try {
            const jsonData = await fs.readFile(filePatch)

            return JSON.parse(jsonData.toString())
        } catch (e) {
            return {title: 'no title'}
        }
    }



    const { title } = await getDataParsed()

    return {
        props: {
            title
        },
    }
}

type PropsType = {
   title: string
}

const Test = (props: PropsType) => {

    const  {title} = props
    return (
        <PageWrapper>
            {title}
        </PageWrapper>
    );
};

Test.getLayout = getLayout
export default Test;