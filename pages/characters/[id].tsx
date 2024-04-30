import {getLayout} from "../../components/Layout/BaseLayout";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterType} from "../../assets/api/rick-and-morty-api";
import {API} from "../../assets/api/api";
import {GetStaticPaths, GetStaticProps} from "next";
import characters from "./index";
import {useRouter} from "next/router";
import styled from "styled-components";

//когда много различных персонажей , много страниче (допустим открытие по ID , заранее компилем их )
export const getStaticPaths: GetStaticPaths = async () => {

    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map(character => ({
        params: {id: String(character.id)}
    }))

    // [{params: {id:1}}] массив урлов
    return {
        paths,
        fallback: true
    }
}


//страничка собирается только во время билда . Она будет всегда одинаковая . Она
//кешируется
export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const { id } = params || {};
        const character = await API.rickAndMorty.getCharacter(id as string);

        if (!character) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                character
            }
        };
    } catch (error) {
        console.error('Error fetching character:', error);

        // Перенаправление на кастомную страницу ошибки
        return {
            redirect: {
                destination: '/500',
                permanent: false
            }
        };
    }
}

type PropsType = {
    character: CharacterType
}

const Character = (props: PropsType) => {

    const {character} = props
    const router = useRouter()

    if(router.isFallback) return  <h1>Loading...</h1>

    const characterId = router.query.id

    const goToCharacters = () => {
        router.push('/characters')
    }


    return (
        <PageWrapper>
            <IdText>ID: {characterId}</IdText>
            <CharacterCard key={character.id} character={character}/>
            <Button onClick={goToCharacters}>go to characters</Button>
        </PageWrapper>
    );
};

const IdText = styled.div`
font-size: 40px;
`
const Button = styled.button`
  height: 39px;
  background: #1ecea4;
  width: 120px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

Character.getLayout = getLayout
export default Character;