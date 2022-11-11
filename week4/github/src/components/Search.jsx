import styled from 'styled-components'
import { useNavigate, Outlet} from 'react-router-dom';
import { Fragment, useRef, useState } from 'react';

const Search = () => {
    const navigate=useNavigate()
    const searchRef = useRef(null)
    const [historyArr, setHistoryArr] = useState([])
    const [historyShow, setHistoryShow] = useState(false)
    const [value, setValue]=useState()

    const search=(url, id)=>{
        navigate(url, {state:{id:id}}) // Detail페이지로 넘어가면서, 유저로그인 정보를 같이 넘겨주었습니다
    }
    const onKeyPress=(e)=>{
        if(e.key==="Enter"){
            let searchId=searchRef.current.value
            console.log(searchId)
            setHistoryArr([searchId,...historyArr]) //기존 배열값에서 추가

            search(`/search/${searchId}`,searchId);
        }
        setHistoryShow(false)
    }
    console.log(historyArr)
    const historyVisible=()=>{
        setHistoryShow(true)
    }
    const historyClick=(history)=>{
        search(history,history);
        setHistoryShow(false)
        setValue(history)
    }
    const historyDelete=(history)=>{
        setHistoryArr(historyArr.filter(word=>word!==history))//필터링해서 다시 set
    }

    return (
        <>
        <Box>
            <Title>
                Github Profile Finder
            </Title>
            <UserNameInput placeholder='Github Username...' onClick={historyVisible} onKeyPress={onKeyPress} ref={searchRef} value={value}/>
            {historyShow&&(<>{historyArr.map((history,i)=><HistoryFlex key={i}><Font onClick={()=>historyClick(history)}>{history}</Font><XButton onClick={()=>historyDelete(history)}>x</XButton></HistoryFlex>)}</>)}
            <Outlet/>
        </Box>
        </>
        
    );
};

export default Search;

const HistoryFlex=styled.section`
    display: flex;

`
const Font=styled.span`
    margin: 0;
    float: left;
`
const XButton=styled.button`
    border:1px solid transparent;
    background-color: transparent;
    
`
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