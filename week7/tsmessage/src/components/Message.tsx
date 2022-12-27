import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import { List } from '../types/common';
import styled from 'styled-components';
import LockModal from './LockModal';
import CheckModal from './CheckModal';


export default function MessageList() {
    const [messages, setMessages] = useState<List[]>([]);
    const [isWritingClicked, setIsWritingClicked] = useState<boolean>(false);
    const [writer, setWriter]=useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [hint, setHint]=useState<string>("");
    const [isLockModalClicked, setIsLockModalClicked] = useState<boolean>(false);


    const fetchData = async () => {
      try {
          const res = await axios({
              method: "get",
              url: "/letters",
          });
          console.log(res.data);
          if (res.status === 200) {
              setMessages(res.data);
          }
      } catch (error) {
          console.log(error);
      }
  };


    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (event:any) => {
        setIsWritingClicked((prev)=>!prev)

        let formData = new FormData();
        formData.append("writer", writer);
        formData.append("message", message);
        formData.append("password", password);
        formData.append("hint", hint);
        
        event.preventDefault();
        console.log("ddfdfdf")
        console.log(formData)

        axios.post("/letters", 
            {
              "writer": writer,
              "message": message,
              "password": password,
              "hint": hint     
            }
          ).then((res) => {
            console.log(res)
            axios.get("/letters")
              .then((res) => {
                setMessage("")
                setMessages(res.data);
              });
          });
      };
    
    const handleWritingClick=()=>{
        setIsWritingClicked((prev)=>!prev)
    }

    const handleLockModalClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setIsLockModalClicked(true)
        console.log(isLockModalClicked)
    }


  return (
    <>
        <Header/>
        <button type='button' onClick={handleWritingClick}>글쓰기</button>

        <MessageWrapper>
        {messages.map(({writer, message, hint, password},i) => (
            <div key={i}>
                {/* {!isLockModalClicked&&<LockModal handleClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleLockModalClick(e)}/>} */}
                <CheckModal hint={hint} password={password}/>
                <p>From. {writer}</p>
                <p>{message}</p>
            </div>
        ))}
        </MessageWrapper>

        {isWritingClicked&&(      
            <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="글쓴이" onChange={({ target: { value } }) => setWriter(value)}/>
            <input type="text" placeholder='메시지 내용' onChange={({ target: { value } }) => setMessage(value)}/>
            <input type="text" placeholder='비밀번호' onChange={({ target: { value } }) => setPassword(value)}/>
            <input type="text" placeholder='힌트'  onChange={({ target: { value } }) => setHint(value)}/>

            <button disabled={!message}>추가</button>
            </form>
        )}

    </>
  )
}

const MessageWrapper=styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin-top: 3rem;


    & > div{
        display: flex;
        flex-direction:column;
        align-items: center;

        text-align: center;

        width: 7rem;
        height: 7rem;

        margin: 1rem;

        border: 0.1rem solid skyblue;
        border-radius: 0.5rem;
        background-color: aliceblue;

        & > p{
            margin: 0.3rem;
        }

        & > p:nth-child(1){
            width: 7rem;
            
            border-bottom: 0.1rem solid skyblue;
        }
    }
`