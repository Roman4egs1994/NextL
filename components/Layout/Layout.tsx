import React, {PropsWithChildren} from 'react';
import {NextPage} from "next";
import {Header} from "../Header/Header";
import styled from "styled-components";

const Layout: NextPage<PropsWithChildren> =  (props) => {

    const {children} = props
    return (
        <Container>
            <Header/>
           <Main>{children}</Main>
        </Container>
    )
}

export default Layout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const Main  = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
`