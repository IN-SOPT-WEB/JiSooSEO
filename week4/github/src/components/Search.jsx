import React from 'react';
import styled from 'styled-components'
import Detail from './Detail';

const Search = () => {
    return (
        <>
        <Box>
            <Title>
                Github Profile Finder
            </Title>
            <UserNameInput placeholder='Github Username...'/>
        </Box>
        <Detail/>
        </>
        
    );
};

export default Search;

const Box=styled.section`
    width: 50rem;
    height: 10rem;
    border:solid 1px;
    border-radius: 2rem;
    background-color: #2a3568d6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title=styled.h1`
    color:white;
    font-size: 30pt;
    margin: 0;
    padding: 0;
`
const UserNameInput=styled.input`
    width: 17rem;
    height: 1.5rem;
    border:solid 1px transparent;
    border-radius: 0.2rem;
    margin: 0.3rem 0 0 0;
    
    &:focus {
    outline: none;
  }
`