import styled from 'styled-components'
import { useNavigate, Outlet} from 'react-router-dom';
import { Fragment, useRef, useState } from 'react';

const Search = () => {
    const navigate=useNavigate()
    const searchRef = useRef(null)
    const [historyArr, setHistoryArr] = useState([])//history 배열
    const [historyShow, setHistoryShow] = useState(false)//history 보이기 여부

    const search=(url, id)=>{
        navigate(url, {state:{id:id}}) // Detail페이지로 넘어가면서, 유저로그인 정보를 같이 넘겨주었습니다
    }
    const onKeyPress=(e)=>{
        if(e.key==="Enter"){
            let searchId=searchRef.current.value
            setHistoryArr([searchId,...historyArr]) //기존 배열값에 새로운 search내용 추가

            search(searchId,searchId);

        }
        setHistoryShow(false)//페이지가 나올때는 history가 안 보인다
    }
    const historyVisible=()=>{
        setHistoryShow(true) //input창 클릭시에는 history가 보인다
    }
    const historyClick=(history)=>{
        search(history,history);
        setHistoryShow(false) //history클릭하면 더이상 history안 보인다
        searchRef.current.value=history //history클릭하면 input 창의 내용도 그 history로 바뀐다
    }
    const historyDelete=(history)=>{
        setHistoryArr(historyArr.filter(word=>word!==history))//필터링해서 다시 set
        searchRef.current.value=null //x눌렀을 때, input창의 내용도 null값으로 바뀐다
    }

    return (
        <>
        <Box>
            <Title>
                Github Profile Finder
            </Title>
            <UserNameInput placeholder='Github Username...' onClick={historyVisible} onKeyPress={onKeyPress} ref={searchRef}/>
            {historyShow&&(<>{historyArr.map((history,i)=><HistoryFlex key={i}><Font onClick={()=>historyClick(history)}>{history}</Font><XButton onClick={()=>historyDelete(history)}>x</XButton></HistoryFlex>)}</>)}
        </Box>
        <Outlet/>

        </>
        
    );
};

export default Search;

const HistoryFlex=styled.section`
    display: flex;
    border:1px solid transparent;
    background-color: #90a1ba;
    width: 17rem;
    justify-content: space-between;
    padding: 0.2rem;
`
const Font=styled.span`
    margin: 0;
`
const XButton=styled.button`
    border:1px solid transparent;
    background-color: #6f829e;

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