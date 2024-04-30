import React from 'react';
import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {getLayout} from "../components/Layout/BaseLayout";
import Characters from "./characters";

const NotFound = () => {
    return (
       <PageWrapper>
           404 not found
       </PageWrapper>
    );
};

NotFound.getLayout = getLayout
export default NotFound;
