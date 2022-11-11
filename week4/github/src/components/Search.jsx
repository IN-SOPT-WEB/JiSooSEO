import styled from 'styled-components'
import { useNavigate, Outlet} from 'react-router-dom';
import { useRef } from 'react';

const Search = () => {
    const navigate=useNavigate()
    const searchRef = useRef(null)
    // const searchId=searchRef.current.value

    const search=(url, id)=>{
        navigate(url, {state:{id:id}}) // Detail페이지로 넘어가면서, 유저로그인 정보를 같이 넘겨주었습니다
    }
    const onKeyPress=(e)=>{
        // console.log(searchRef.current.value)
        if(e.key==="Enter"){
            search(`/search/${searchRef.current.value}`,searchRef.current.value);
        }
    }
    return (
        <>
        <Box>
            <Title>
                Github Profile Finder
            </Title>
            <UserNameInput placeholder='Github Username...' onKeyPress={onKeyPress} ref={searchRef}/>
            <Outlet/>
        </Box>
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
    position: relative;
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