import styled from "styled-components";
import data from "../db/data.json";
import { useState,useEffect } from "react";
import Score from "./Score";
import Again from "./Again";

export default function Main() {
  const [id, setId] = useState(1)//첫 시작을 1로 하고, 정답을 맞출때마다 +1이 되도록. 정답을 모두 맞춰서 id가 6이 되면 종료한다.
  const [img, setImg] = useState(`${data.toystorys.filter((toystory)=>toystory.id===id)[0].img}`) //data로부터 이미지 경로 읽어오기
  const [list, setlist] = useState(`${data.toystorys.filter((toystory)=>toystory.id===id)[0].list}`.split(","))//data로부터 리스트 읽어오기
  const [answer,setAnswer] = useState(`${data.toystorys.filter((toystory)=>toystory.id===id)[0].answer}`)//data로부터 정답 읽어오기
  const [score,setScore]=useState(0)
  useEffect(() => {
    
  }, [score,setScore])

  const answerClick=(value)=>{
    if (value===answer){
      // 정답을 선택한 경우 = 선택한 정답인 value와 실제 정답인 answer이 같은 경우
      setId(id+1) 
      console.log(id)
      setImg(`${data.toystorys.filter((toystory)=>toystory.id===id+1)[0].img}`) //비동기 이슈로 id에 +1을 더해주었다
      setlist(`${data.toystorys.filter((toystory)=>toystory.id===id+1)[0].list}`.split(","))//split이용해서 읽어온 스트링을 리스트화했다
      setAnswer(`${data.toystorys.filter((toystory)=>toystory.id===id+1)[0].answer}`)
      setScore(score+1)

      console.log("사진"+img)
      console.log("정답지"+list)
      console.log("정답"+answer)
      console.log("id"+id)      
    }
    else{}
  }
  const againClick=()=>{
    setId(1)
    setScore(0)
    setImg(`${data.toystorys.filter((toystory)=>toystory.id===1)[0].img}`) //가장 처음으로 돌아감
    setlist(`${data.toystorys.filter((toystory)=>toystory.id===1)[0].list}`.split(","))
    setAnswer(`${data.toystorys.filter((toystory)=>toystory.id===1)[0].answer}`)

    console.log("다시하기")
  }

    return (
      <>
      <Score score={score}/>
      {score===5?(<EndDom><EndImg src="img/toystory.png" alt="#"/><Font>끝</Font></EndDom>):(
      <>
      <img src={img} alt="#" />
      <AnswerButtonDom> 
        {/* map함수로 정답후보 리스트 하나씩 읽어오기 */}
              {list.map((value)=>(<AnswerButton onClick={()=>answerClick(value)}>{value}</AnswerButton>))}
      </AnswerButtonDom>
      </>
      )}
      <section  onClick={()=>againClick()}>
        <Again/>
      </section>
      
      </>
    )
  }

const AnswerButtonDom=styled.section`
  display: flex;
  justify-content:center;
`
const AnswerButton=styled.button`
  padding: 5px 15px;
  margin: 10px;
  border-radius: 40px;
  border: 1px solid ;
  font-size: 12pt;
  background-color: skyblue;
  cursor: pointer;
`
const Font=styled.h1`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`
const EndImg=styled.img`
  position: relative;
  z-index: 1;
  width: 500px;
`
const EndDom=styled.section`
  /* position: absolute; */
`