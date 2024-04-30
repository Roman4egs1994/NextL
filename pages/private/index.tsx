import React from 'react';
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {getLayout} from "../../components/Layout/BaseLayout";
import {LoginNavigate} from "../../hoc/LoginNavigate";


const Index = () => {
    return (
        <LoginNavigate>
            <PageWrapper>
              PRIVATE PAGE
            </PageWrapper>
        </LoginNavigate>
    );
};

Index.getLayout = getLayout
export default Index;