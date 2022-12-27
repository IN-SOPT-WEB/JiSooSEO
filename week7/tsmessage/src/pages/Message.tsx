import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import { List } from '../types/common';


export default function Message() {
    const [messages, setMessages] = useState<List[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [writer, setWriter]=useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [password, setPassword]=useState<string>("");
    const [hint, setHint]=useState<string>("");

    const getData = async () => {
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
        getData();
    }, []);


    const handleSubmit = (e:any) => {
        let formData = new FormData();
        formData.append("writer", writer);
        formData.append("message", message);
        formData.append("password", password);
        formData.append("hint", hint);
        
        e.preventDefault();

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
    
  return (
    <>
        <Header/>
        <button type='button'>글쓰기</button>
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
