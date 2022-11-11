import styled,{css} from "styled-components"
import axios from "axios";
import { useState, useEffect } from 'react';

const Detail = () => {
    const [data,setData]=useState([]);//받아올 깃헙 정보들을 data변수로 설정했습니다

    async function getGithubProfile() {
        const response = await axios.get("https://api.github.com/users/seojisoosoo");
        console.log("data", response);
        setData(response.data);
    }

    useEffect(() => {
        getGithubProfile();
    }, []);

    

    return (
        <Box>
            <XButton>X</XButton>
            <Img src={data.avatar_url} alt="#"/>
            <GitId>{data.login}</GitId>
            <Name>{data.name}</Name>
            <a href={data.html_url}>
                <Url>visit {data.name}</Url>
            </a>
            <NumTagFlex>
                <NumTag>
                    <span>Followers</span>
                    <span>{data.followers}</span>
                </NumTag>
                <NumTag>
                    <span>Following</span>
                    <span>{data.following}</span>

                </NumTag>
                <NumTag>
                    <span>Repos</span>
                    <span>{data.public_repos}</span>
                </NumTag>

            </NumTagFlex>
        </Box>
    );
   
};

export default Detail;

const Flex=css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Box=styled.section`
    width: 50rem;
    height: 30rem;
    border:solid 1px;
    border-radius: 2rem;
    background-color: #2a3568d6;
    margin-top: 1rem;
    ${Flex}
`
const Img=styled.img`
    
`
const GitId=styled.h1`
    
`
const Name=styled.h1`
    
`
const Url=styled.button`
    
`
const NumTagFlex=styled.section`
    width: 50rem;
    display: flex;
    justify-content: space-evenly;
`
const NumTag=styled.section`
    width: 7rem;
    height: 7rem;
    border:solid 1px;
    border-radius: 1.5rem;
    background-color: #2a3568d6;
    ${Flex}
`
const XButton=styled.button`
    border: 1px solid transparent;
    background-color: transparent;
`