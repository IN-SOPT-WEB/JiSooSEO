import styled,{css} from "styled-components"
import axios from "axios";
import { useState, useEffect } from 'react';
import {useNavigate,useLocation} from "react-router-dom"
import spinner from "../assets/spinner.gif"

const Detail = () => {
    const [data,setData]=useState([]); //받아올 깃헙 정보들을 data변수로 설정했습니다
    const {state}=useLocation(); //useNavigate으로 넘겼던 유저로그인 정보를 받아옵니다
    const navigate=useNavigate()
    const [loading, setLoading] = useState(false);//로딩 중인지의 여부


    async function getGithubProfile() {
        setLoading(true);
        const response = await axios.get("https://api.github.com/users/"+state.id);
        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getGithubProfile();
    }, []);

    
    if (loading) {
      return <><img src={spinner} alt="로딩중"/></>;
    }
    return (
        <>
        <Box>
            <XButton onClick={() => navigate(-1)}>X</XButton>
            <Img src={data.avatar_url} alt="#"/>
            <GitId>{data.login}</GitId>
            <Name>{data.name}</Name>
            <a href={data.html_url}>
                <Url>visit {data.name}</Url>
            </a>
            <NumTagFlex>
                <NumTag>
                    <span>Followers</span>
                    <Font>{data.followers}</Font>
                </NumTag>
                <NumTag>
                    <span>Following</span>
                    <Font>{data.following}</Font>

                </NumTag>
                <NumTag>
                    <span>Repos</span>
                    <Font>{data.public_repos}</Font>
                </NumTag>

            </NumTagFlex>
        </Box>
        </>

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
    position: absolute;
    top: 55%;
    left:50%;
    transform: translate(-50%,-50%);
    
    ${Flex}
`
const Img=styled.img`
    width: 10rem;
    margin-top: -3%;
`
const GitId=styled.h1`
    margin:1rem;
    font-size: 20pt;
    color: white;
`
const Name=styled.p`
    margin: 0;
    font-size: 20pt;
    color: white;
`
const Url=styled.button`
    margin:1rem;
    font-size: 11pt;
    border: 1px solid white;
    border-radius: 5rem;
    background-color: transparent;
    color: white;
    padding: 0.3rem 1rem;
`
const NumTagFlex=styled.section`
    width: 50rem;
    display: flex;
    justify-content: space-evenly;
`
const NumTag=styled.section`
    width: 7rem;
    height: 5rem;
    border:solid 1px transparent;
    border-radius: 1.5rem;
    background-color: #2a3568d6;
    color: white;
    ${Flex}
`
const Font=styled.h1`
    margin: 0;
    font-size: 20pt;
`
const XButton=styled.button`
    border: 1px solid transparent;
    background-color: transparent;
    margin-left: 91%;
    margin-top: -3%;
    font-size: 25pt;
    cursor: pointer;
    color: white;
`