import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import { List } from '../types/common';


export default function Message() {
    const [messages, setMessages] = useState<List[]>([]);

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


    </>
  )
}
