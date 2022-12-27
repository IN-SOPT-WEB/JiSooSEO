import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import { List } from '../types/common';

export default function MessageList() {
    const [messages, setMessages] = useState<List[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [writer, setWriter]=useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword]=useState("");
    const [hint, setHint]=useState("");

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
        let formData = new FormData();
        formData.append("writer", writer);
        formData.append("message", message);
        formData.append("password", password);
        formData.append("hint", hint);
        
        event.preventDefault();
        // setMessages("{"writer":writer, "message":message, "password":password, "hint":hint}")
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
    
    const handleClick=()=>{
        setIsClicked((prev)=>!prev)
    }


  return (
    <>
        <Header/>
        {/* {isClicked&&<MessageForm/>} */}
        <button type='button' onClick={handleClick}>글쓰기</button>
        {messages.map(({writer, message},i) => (
            <section key={i}>
            <p>{writer}</p>
            <p>{message}</p>
            </section>
        ))}


      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="글쓴이" onChange={({ target: { value } }) => setWriter(value)}/>
        <input type="text" placeholder='메시지 내용' onChange={({ target: { value } }) => setMessage(value)}/>
        <input type="text" placeholder='비밀번호' onChange={({ target: { value } }) => setPassword(value)}/>
        <input type="text" placeholder='힌트'  onChange={({ target: { value } }) => setHint(value)}/>

        <button disabled={!message}>추가</button>
      </form>

    </>
  )
}
