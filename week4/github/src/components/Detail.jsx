import React from 'react';
import styled,{css} from "styled-components"

const Detail = () => {
    return (
        <Box>
            <XButton>X</XButton>
            <Img src="#" alt="#"/>
            <GitId>aaaaa</GitId>
            <Name>ddddd</Name>
            <Url>button</Url>
            <NumTagFlex>
                <NumTag>
                    <p>Followers</p>
                    <p>22</p>
                </NumTag>
                <NumTag>
                <p>Following</p>
                    <p>22</p>

                </NumTag>
                <NumTag>
                <p>Repos</p>
                    <p>22</p>

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